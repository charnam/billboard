import * as Content from "../../static/js/content/main.js";

export default new Content.SlideshowObject({
    slides: [
        new Content.FlexboxObject({
            class: "my-class",
            children: [
                new Content.TextObject({ 
                    class: "title",
                    text: "First Slide"
                }),
                new Content.ImageObject({
                    src: "https://picsum.photos/720/480",
                    fit: "contain"
                }),
                new Content.ImageObject({
                    src: "files/magenta_flowers.jpg",
                    fit: "contain",
                    class: "my-favorite-image cool-image"
                })
            ],
        }),
        new Content.ImageObject({
            src: "files/westphalia.jpg",
            fit: "fill"
        }),
        new Content.VideoObject({
            src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        })
    ]
});
