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
                    src: "https://picsum.dev/300/200",
                    fit: "contain"
                }),
                new Content.ImageObject({
                    src: "https://picsum.dev/300/200",
                    fit: "contain",
                    class: "my-favorite-image cool-image"
                })
            ],
        }),
        new Content.ImageObject({
            src: "https://picsum.dev/300/200",
            fit: "fill"
        })
    ]
});
