import GenericObject from "./GenericObject.js";

class SlideshowObject extends GenericObject {
    currentSlide = 0;
    startDelay = 0;
    slideDuration = 3000;
    
    constructor(details) {
        super(details);
        
        if(!details.slides)
            throw new Error("SlideshowObject does not contain slides[] in options")
        
        this.slides = details.slides;
        
        if(typeof details.slideDuration != "undefined") {
            this.slideDuration = details.slideDuration
        }
        if(typeof details.startDelay != "undefined") {
            this.startDelay = details.startDelay;
        }
    }
    
    render(container) {
        super.render(container);
        
        const slideshowContainer = document.createElement("div");
        slideshowContainer.classList.add("slideshow");
        
        for(let slide of this.slides) {
            const slideContainer = document.createElement("div");
            slideContainer.classList.add("slide");
            
            slide.render(slideContainer);
        }
        
        container.appendChild(slideshowContainer);
        
        setInterval(() => {
            slideshowContainer.setAttribute("style", )
        }, this.slideDuration);
    }
}

export default SlideshowObject;