import GenericObject from "./GenericObject.js";
import parseSrc from "../parseSrc.js";

class VideoObject extends GenericObject {
    constructor(details) {
        super(details);
        
        if(typeof details.src !== "string")
            throw new Error("Non-string value passed to videoObject src");
        
        this.src = parseSrc(details.src);
    }
    
    render(container) {
        super.render(container);
        
        const videoContainer = document.createElement("div");
        videoContainer.classList.add("bb-object");
        videoContainer.classList.add("bb-video");
        
        // _applyClasses should be run at least once per object render
        this._applyClasses(videoContainer);
        
        const video = document.createElement("video");
        video.src = this.src;
        video.onload = () => {
            videoContainer.setAttribute("style", `
                --video-aspect-ratio: ${video.width} / ${video.height};
            `)
        }
        
        videoContainer.appendChild(video);
        
        container.appendChild(videoContainer);
    }
    
}

export default VideoObject;