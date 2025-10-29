import GenericObject from "./GenericObject.js";

class ContainerObject extends GenericObject {
    constructor(details) {
        super(details);
        
        if(details.children) {
            if(Array.isArray(details.children)) {
                this.children = details.children;
            } else {
                throw new Error("ContainerObject.children is not an array");
            }
        }
    }
    
    render(container) {
        const element = document.createElement("div");
        element.classList.add("bb-object");
        element.classList.add("bb-container");
        
        GenericObject._applyClasses(this.classes);
        
        container.appendChild(element);
    }
}

export default ContainerObject;
