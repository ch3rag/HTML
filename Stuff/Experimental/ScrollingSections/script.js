window.onload = function() {
    const divHeight = document.getElementsByClassName("scroll-section")[0].clientHeight;
    const body = document.body;
    const numSections = 5;
    let currentSection = 0;
    window.addEventListener("wheel",function(event) {
        currentSection = Math.floor(document.documentElement.scrollTop / divHeight);
        console.log(currentSection);
        if (event.deltaY > 0)
            currentSection =  currentSection == numSections? currentSection : currentSection + 1;
        else
            currentSection =  currentSection == 0? currentSection : currentSection - 1;
            window.scrollTo(0, currentSection * divHeight);

        // if(currentSection > 0) {
        //     document.getElementsByClassName("scroll-section")[currentSection].style.position = 'absolute';
        //     document.getElementsByClassName("scroll-section")[currentSection].style.top = document.documentElement.scrollTop;

        // }
    });
}