#!/bin/sh
# This file is run once the Cage compositor is set up.
# Wayland session variables are accessible here.

# Initialize based on billboard owner's init script:
if [ -f ./config/init.sh ]; then
    ./config/init.sh
fi

# The working directory should be /home/admin/billboard
# Start Electron application here...
electron kiosk/electron-main.js
