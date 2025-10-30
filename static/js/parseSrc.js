/**
 * In content scripts, it may be important to import images or
 * videos from web sources, due to lack of file storage on the
 * client.
 * 
 * Using a relative file path, config/content/files will be
 * checked for the specified file. Using a web-like or
 * absolute path, no modifications will be made to the source.
 */

function parseSrc(src) {
    if(src.startsWith("files/"))
        return "./config/content/"+src;
    
    if(src.startsWith("./files/"))
        return "./config/content/"+src;
    
    // Relative file paths shouldn't be outside of files/ - Allow
    // for going up a directory if needed
    if(src.startsWith("./") || src.startsWith("../"))
        return "./config/content/files/"+src;
    
    return src;
}

export default parseSrc;