# Billboard

This repository stores an application for creating billboards using JavaScript and CSS.

## Setup

1. Clone this repository
2. Enter the project directory, and either:
    - Start a Python HTTP server (`python3 -m http.server`)
    - Copy the project files to the webroot of an Apache server.

View config/content-template/README.md for more information on how to set up your billboard.

You may alternatively view `setup/setup.sh` for information on how to set this project up on your Raspberry Pi system.

## Project Notes

Billboard is designed for vertical displays, but horizontal ones may be supported in the future. If you attempt to run any sample code in its current state with horizontal displays, please understand that it may not function properly.

Upstream HTML, JavaScript, and CSS code should make use of *relative file paths* (e.g `./`) wherever fetching content. Content scripts (config/content/content.js) may do either relative or absolute paths, but developers of these scripts should understand that these paths will behave differently depending on how the application is loaded (from a webserver, or in the Electron kiosk mode)

To test the Electron kiosk mode on a non-Pi, run `npm install` in the project root (assuming you have NPMJS and Node.JS installed), and then run `./kiosk/kiosk.sh`

## License

GNU Affero GPL 3.0 - See LICENSE for more details.

The config/ directory shall always be licensed under a CC0 license. You may modify the configuration of this application