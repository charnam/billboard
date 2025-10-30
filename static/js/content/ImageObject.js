import GenericObject from "./GenericObject.js";
import parseSrc from "../parseSrc.js";

class ImageObject extends GenericObject {
    static validFitArguments = ["contain", "fill", "stretch"];
    
    constructor(details) {
        super(details);
        
        if(typeof details.src !== "string")
            throw new Error("Non-string value passed to ImageObject src");
        
        this.src = parseSrc(details.src);
        
        if(ImageObject.validFitArguments.includes(details.fit))
            this.fit = details.fit;
    }
    
    render(container) {
        super.render(container);
        
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("bb-object");
        imageContainer.classList.add("bb-image");
        
        // _applyClasses should be run at least once per object render
        this._applyClasses(imageContainer);
        
        const image = document.createElement("img");
        image.src = this.src;
        image.onload = () => {
            // We need to set the aspect ratio in the style tag, as
            // CSS currently does not allow for <img> elements to
            // automatically fit their containers.
            imageContainer.setAttribute("style", 
                `--image-aspect-ratio: ${image.width} / ${image.height};`);
        }
        
        if(this.fit) {
            imageContainer.classList.add("fit-"+this.fit);
        }
        
        imageContainer.appendChild(image);
        
        container.appendChild(imageContainer);
    }
    
}

export default ImageObject;