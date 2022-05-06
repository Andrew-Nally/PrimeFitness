require({ Notifier });
'@airbrake/browser';

const airbrake = new Notifier({
    projectId: 416002,
    projectKey: '8b2b2ec00750a0716a30ef9dc27e7cd0',
    environment: 'production'
});

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}

function darkMode() {
    let elements = document.querySelectorAll('.dark-mode');
    elements4

}