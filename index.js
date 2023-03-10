const electron = require('electron');
const {app, BrowserWindow} = electron;
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    center: true,
    hasShadow: false,
    title: "Lylli - Multipurpose Tool",
    icon: './public/assets/logo.png',
    autoHideMenuBar: true,
    webPreferences: {
      webviewTag: true,
      nodeIntegration: true,
      nodeIntegrationInSubFrames: true,
      nodeIntegrationInWorker: true,
      contextIsolation: false
    },
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, '/public/index.html'),
      protocol: 'file:',
      slashes: true
    })
  );

  mainWindow.on('closed', function () {
    mainWindow = null
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});