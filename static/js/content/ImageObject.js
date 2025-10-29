import GenericObject from "./GenericObject.js";

class ImageObject extends GenericObject {
    render(container) {
        super.render(container);
        
        const image = document.createElement("img");
        image.src = this.src;
        
        container.appendChild(image);
    }
    
    constructor(src) {
        if(typeof src !== "string")
            throw new Error("Non-string value passed to ImageObject");
        
        if(src.startsWith("files/")) {
            src = "./config/content/"+src;
        }
        
        super({src});
        
        this.src = src;
    }
}

export default ImageObject;