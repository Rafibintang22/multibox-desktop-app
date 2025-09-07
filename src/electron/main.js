import { app, BrowserWindow } from "electron";
import path from "path";

app.whenReady().then(() => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({});

    // path.join() digunakan untuk memastikan path dapat berjalan di windows, mac, dan linux
    // app.getAppPath() digunakan untuk mendapatkan path aplikasi electron
    // Load the React app
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
});
