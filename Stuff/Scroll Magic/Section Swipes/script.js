window.onload = function() {
    let slides = document.getElementsByClassName("panel"); 

    const controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: "onLeave"
        }
    });
    
    for(let i = 0 ; i < slides.length ; i++) {
        new ScrollMagic.Scene({
            triggerElement: slides[i]
        })
        .setPin(slides[i])
        .addIndicators()
        .addTo(controller);
    }
}