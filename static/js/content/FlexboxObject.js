
import ContainerObject from "./ContainerObject.js";

class FlexboxObject extends ContainerObject {
    constructor(details) {
        super(details);
        
        this.classes.push("bb-flexbox");
        
        if(details.direction == "horizontal")
            this.classes.push("bb-flexbox-horizontal");
    }
}

export default FlexboxObject;
