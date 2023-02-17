var buttons = document.querySelectorAll('.nav ul li:not(.spacer)');
buttons.forEach(btn => {
    btn.addEventListener('click', ()=>{
        window.location.href = btn.dataset.link;
    });
});