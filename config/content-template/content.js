import * as Content from "../../static/js/content/main.js";

export default new Content.SlideshowObject({
    slides: [
        new Content.FlexboxObject({
            children: [
                new Content.ImageObject({
                    src: "https://picsum.dev/300/200",
                    fit: "contain",
                    classes: ["myFavoriteImage"]
                }),
                new Content.ImageObject({
                    src: "https://picsum.dev/300/200",
                    fit: "contain",
                    classes: ["myFavoriteImage"]
                })
            ],
        }),
        new Content.ImageObject({
            src: "https://picsum.dev/300/200",
            fit: "fill"
        })
    ]
});
