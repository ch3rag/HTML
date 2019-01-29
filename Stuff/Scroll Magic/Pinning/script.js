window.onload = function() {
    // SET DURATION TO 0 FOR PERMANENT PINS
    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        duration: 300
    })
    .setPin("#animate1")
    .addIndicators({name: "1 (Duration 300)"})
    .addTo(controller);
}

