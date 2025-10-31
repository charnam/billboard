import GenericObject from "./GenericObject.js";
import parseSrc from "../parseSrc.js";

class VideoObject extends GenericObject {
    muted = true;
    
    constructor(details) {
        super(details);
        
        if(typeof details.src !== "string")
            throw new Error("Non-string value passed to videoObject src");
        
        this.src = parseSrc(details.src);
        
        if(typeof details.muted !== "undefined")
            this.muted = details.muted;
    }
    
    render(container) {
        super.render(container);
        
        const videoContainer = document.createElement("div");
        videoContainer.classList.add("bb-object");
        videoContainer.classList.add("bb-video");
        
        // _applyClasses should be run at least once per object render
        this._applyClasses(videoContainer);
        
        const video = document.createElement("video");
        
        video.onloadedmetadata = () => {
            videoContainer.setAttribute("style", 
                `--video-aspect-ratio: ${video.videoWidth} / ${video.videoHeight};`);
        }
        
        video.autoplay = true;
        video.loop = true;
        video.muted = this.muted;
        video.src = this.src;
        
        videoContainer.appendChild(video);
        
        container.appendChild(videoContainer);
    }
    
}

export default VideoObject;