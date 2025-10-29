/**
 * This file is separate from 'main.js', because it needs to run before the
 * slideshow content is initialized. If there is an error in the imported
 * content, the error will be thrown before any content in 'main.js' is
 * executed. Separation, here, mitigates that problem.
 */
window.addEventListener("error", (err) => {
    document.body.setAttribute("setup-error", 
        err.message + "\n\n" +
        err.error.stack
            .split("\n")
            .map(line => "\t" + line)
            .join("\n")
    );
});
