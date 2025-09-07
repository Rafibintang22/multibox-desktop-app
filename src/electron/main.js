import { app, BrowserWindow } from "electron";
import path from "path";

// Create the browser window.
const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
    });

    // path.join() digunakan untuk memastikan path dapat berjalan di windows, mac, dan linux
    // app.getAppPath() digunakan untuk mendapatkan path aplikasi electron
    // Load the React app
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
};

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        // Untuk macOS, karena umum untuk membuat window baru pada aplikasi ketika dock icon di klik dan dalam kondisi window tidak ada yg terbuka
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });

    app.on("window-all-closed", () => {
        // Untuk macOS, aplikasi dan menu bar tetap aktif sampai user quit secara eksplisit dengan Cmd + Q
        // eslint-disable-next-line no-undef
        if (process.platform !== "darwin") {
            app.quit();
        }
    });
});
