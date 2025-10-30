
import "./handle-errors.js";
import billboardContent from "../../config/content/content.js";

try {
    billboardContent.render(
        document.getElementById("billboard-content")
    );
} catch(err) {
    document.body.setAttribute("setup-error", err.message);
}
window.addEventListener("load", () => {
    /**
     * If the application is running in an iframe, show the mouse. A cursor
     * is useful for debugging, but less useful on a billboard.
     */
    if(window.parent !== window)
        document.body.classList.add("debug");

    setTimeout(() => {
        document.body.classList.add("page-loaded")
    }, 800)
});
