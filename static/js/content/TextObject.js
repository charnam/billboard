import GenericObject from "./GenericObject.js";

class TextObject extends GenericObject {
    text = "";
    
    constructor(details) {
        super(details);
        
        if(typeof details.text == "string")
            this.text = details.text;
    }
    
    render(container) {
        const element = document.createElement("span");
        element.classList.add("bb-text");
        
        this._applyClasses(element);
        
        element.innerText = this.text;
        container.appendChild(element)
    }
}

export default TextObject;
