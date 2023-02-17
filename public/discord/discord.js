
var textLine1 = document.querySelector('#tl1');
var textLine2 = document.querySelector('#tl2');
var appID = document.querySelector('#aid');
var imageKey = document.querySelector('#liid');
var smallKey = document.querySelector('#siid');
var imageText = document.querySelector('#litx');
var smallText = document.querySelector('#sitx');
var b1Check = document.querySelector('#eb1');
var b2Check = document.querySelector('#eb2');

var b2Div = document.querySelector('#b2');
var b2Name = document.querySelector('#b2name');
var b2Url = document.querySelector('#b2url');
var b1Div = document.querySelector('#b1');
var b1Name = document.querySelector('#b1name');
var b1Url = document.querySelector('#b1url');

var start = document.querySelector('#start');
var stopp = document.querySelector('#stop');

const RPC = require('discord-rpc');
const clientId = appID.value;
const scopes = ['rpc', 'rpc.api', 'messages.read'];

const client = new RPC.Client({ transport: 'websocket' });

client.on('ready', () => {
  console.log('Logged in as', client.application.name);
  console.log('Authed for user', client.user.username);
  client.setActivity({
    details: textLine2.value,
    state: textLine1.value,
    buttons: buttons,
    smallImageKey: smallKey.value == "" ? null : smallKey.value,
    smallImageText: smallText.value == "" ? null : smallText.value,
    largeImageKey: imageKey.value == "" ? null : imageKey.value,
    largeImageText: imageText.value == "" ? null : imageText.value
});
});

start.addEventListener('click', function(){
    var buttons = [];
    if(b1Name.value != "" || b1Name.value != null) {
        buttons.push({
            label: b1Name.value,
            url: b1Url.value
        });
    }
    if(b2Name.value != "" || b2Name.value != null) {
        buttons.push({
            label: b2Name.value,
            url: b2Url.value
        });
    }
    client.login({ clientId, scopes });
});
stopp.addEventListener('click', function(){
    client.destroy();
});

b1Check.addEventListener('change', function(){
    if(this.checked) {
        b1Div.style.display = 'block';
    }else{
        b1Div.style.display = 'none';
    }
});
b2Check.addEventListener('change', function(){
    if(this.checked) {
        b2Div.style.display = 'block';
    }else{
        b2Div.style.display = 'none';
    }
});