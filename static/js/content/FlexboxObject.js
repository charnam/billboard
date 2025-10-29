
import ContainerObject from "./ContainerObject.js";

class FlexboxObject extends ContainerObject {
    constructor(details) {
        let classes = ["bb-flexbox"]
        
        if(details.direction == "horizontal")
            classes.push("bb-flexbox-horizontal");
        
        if(Array.isArray(details.classes))
            classes.push(...details.classes);
        
        super({...details, classes});
    }
}

export default FlexboxObject;
