window.onload = function() {
    const menuCanelButton = document.getElementsByClassName("cancel-menu-btn")[0];
    menuCanelButton.addEventListener("click", dropMenu);
}

function dropMenu() {
    const menuDiv = document.getElementsByClassName("menu-slide-up")[0];
    console.log(menuDiv);
    menuDiv.classList.toggle("close");
}