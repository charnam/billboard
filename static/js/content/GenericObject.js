
class GenericObject {
    id = null;
    classes = [];
    
    constructor(details) {
        if(details.id && typeof details.id == "string") {
            this.id = details.id;
        }
        
        if(details.classes) {
            if(!Array.isArray(details.classes))
                throw new Error("Object's classes are not an array");
            
            // Push all specified classes into this object's class
            // list
            this.classes.push(...details.classes);
        }
    }
    
    render(container) {
        // Blank to allow for extra content to be
        // added here later.
    }
    
    _applyClasses(container) {
        // Annoyingly, 'class' is a reserved keyword in JavaScript
        for(let addClass of this.classes) {
            container.classList.add(addClass);
        }
    }
}

export default GenericObject;