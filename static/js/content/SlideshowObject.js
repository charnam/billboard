import GenericObject from "./GenericObject.js";

class SlideshowObject extends GenericObject {
    currentSlide = 0;
    startDelay = 0;
    slideDuration = 8000;
    
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
        slideshowContainer.classList.add("bb-object");
        slideshowContainer.classList.add("bb-slideshow");
        
        // _applyClasses should be run at least once per object render
        this._applyClasses(slideshowContainer);
        
        const slideshowSlidesContainer = document.createElement("div");
        slideshowSlidesContainer.classList.add("bb-slideshow-slides");
        slideshowContainer.appendChild(slideshowSlidesContainer);
        
        const slideshowDotsContainer = document.createElement("div");
        slideshowDotsContainer.classList.add("bb-slideshow-dots");
        slideshowContainer.appendChild(slideshowDotsContainer);
        
        for(const slideIndex in this.slides) {
            const slide = this.slides[slideIndex];
            
            const slideContainer = document.createElement("div");
            slideContainer.classList.add("bb-slide");
            slideContainer.classList.add("bb-container");
            
            slideshowSlidesContainer.appendChild(slideContainer);
            
            const slideshowDot = document.createElement("div");
            slideshowDot.classList.add("bb-slideshow-dot");
            slideshowDotsContainer.appendChild(slideshowDot);
            
            slideshowDot.addEventListener("click", () => {
                this.currentSlide = slideIndex;
                updateSlideshow();
            })
            
            slide.render(slideContainer);
        }
        
        container.appendChild(slideshowContainer);
        
        const updateSlideshow = () => {
            slideshowContainer.setAttribute("style", 
                `--current-slide: ${this.currentSlide}; ` +
                `--slide-count: ${this.slides.length};`);
            
            // The dots must be converted into an array to avoid iterating
            // over methods, which are not part of the true list of child
            // nodes (example: forEach, item, keys, length, etc)
            const dots = new Array(...slideshowDotsContainer.children);
            
            for(let dotIndex in dots) {
                const dot = dots[dotIndex];
                
                if(dotIndex == this.currentSlide) {
                    dot.classList.add("current-slide");
                } else if(dot.classList.contains("current-slide")) {
                    dot.classList.remove("current-slide")
                }
            }
        }
        
        updateSlideshow();
        
        const slideshowUpdateInterval = setInterval(() => {
            
            if(!slideshowContainer) {
                clearInterval(slideshowUpdateInterval);
                return;
            }
            
            this.currentSlide++;
            
            if(this.currentSlide >= this.slides.length) {
                this.currentSlide = 0;
            }
            
            updateSlideshow();
            
        }, this.slideDuration);
    }
}

export default SlideshowObject;