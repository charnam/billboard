import billboardContent from "../../config/content/content.js";


billboardContent.render(
    document.getElementById("billboard-content")
);

window.addEventListener("load", () => {
    setTimeout(() => {
        document.body.classList.add("page-loaded")
    }, 500)
});