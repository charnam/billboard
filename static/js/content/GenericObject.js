
class GenericObject {
    id = null;
    classes = [];
    
    constructor(details) {
        if(details.id && typeof details.id == "string") {
            this.id = details.id;
        }
        
        if(details.class) {
            this.classes.push(...details.class.split(" "));
        }
    }
    
    render(container) {
        // Blank method, to allow for an extra super method to be
        // created if needed
    }
    
    _applyClasses(container) {
        // Annoyingly, 'class' is a reserved keyword in JavaScript,
        // so the variable name must be 'addClass' instead
        for(let addClass of this.classes) {
            container.classList.add(addClass);
        }
    }
}

export default GenericObject;