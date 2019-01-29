window.onload = function () {
    setInterval(changeText, 1000);
}

function changeText() {
    const logoContainer = document.getElementById("logo-container");
    logoContainer.childNodes.forEach(x => Math.random() < 0.5? x.className = "sup": x.className="");
}