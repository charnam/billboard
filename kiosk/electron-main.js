/**
 * This file is run by Cage using Electron.
 * 
 * Purpose: Provides an application to display Billboard in
 * full screen / "kiosk mode".
 * 
 * Code adapted from https://www.electronjs.org/docs/latest/
 */

const { app, BrowserWindow } = require('electron/main');

function createWindow () {
    const win = new BrowserWindow({
        fullscreen: true
    });

    // Note: Current working directory should be the
    // `billboard/` repository directory, not the
    // directory that this file is contained in.
    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});