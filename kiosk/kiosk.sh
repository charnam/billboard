#!/bin/sh

# Working directory should be the project root.
# Start electron application here...
./node_modules/.bin/electron ./kiosk/electron-main.js || sleep 5
