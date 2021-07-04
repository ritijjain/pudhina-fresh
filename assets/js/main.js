function switch_dark_mode_icon(darkmode, id) {
    darkmode.toggle();
    render_dark_mode_icon(darkmode, id);
}

function render_dark_mode_icon(darkmode, id) {
    console.log(darkmode.isActivated())
    if (darkmode.isActivated()) {
        document.getElementById(id).classList.remove('fa-sun');
        document.getElementById(id).classList.add('fa-moon');

    } else {
        document.getElementById(id).classList.remove('fa-moon');
        document.getElementById(id).classList.add('fa-sun');
    }
}