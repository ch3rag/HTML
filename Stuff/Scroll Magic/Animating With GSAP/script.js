window.onload = function() {
    const controller = new ScrollMagic.Controller();
    console.log(controller);
    new ScrollMagic.Scene({
        triggerElement: "#trigger"
    })
    .setTween("#animate", 0.5, {backgroundColor: "green", scale: 2.5}) // trigger a TweenMax.to tween
    .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        duration: 200
    })
    .setTween("#animate1", {borderTop: "30px solid white", backgroundColor: "yellow", scale: 2})
    .addIndicators({name: "2 (Duration: 200)"})
    .addTo(controller);

}

