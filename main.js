// Main Process
const {
  app,
  BrowserWindow,
  Notification,
  ipcMain,
  Menu,
  Tray,
} = require("electron");
const path = require("path");
const isDev = !app.isPackaged;

const dockIcon = path.join(__dirname, "assets", "images", "react_app_logo.png");
const trayIcon = path.join(__dirname, "assets", "images", "react_icon.png");

function createSplashWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 200,
    backgroundColor: "#6e707e",
    frame: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  win.loadFile("splash.html");

  return win;
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1600,
    height: 800,
    backgroundColor: "white",
    show: false,
    // autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,

      // is a feature that ensures that both, your preload
      // scripts and electron internal logic run in separate context
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");
  isDev && win.webContents.openDevTools();

  return win;
}

if (isDev) {
  require("electron-reload")(__dirname, {
    Electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  });
}

if (process.platform === "darwin") {
  app.dock.setIcon(dockIcon);
}

let tray = null;

app.whenReady().then(() => {
  const template = require("./utils/Menu").createTemplate(app);
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  tray = new Tray(trayIcon);
  tray.setContextMenu(menu);

  const splash = createSplashWindow();
  const mainApp = createWindow();

  mainApp.once("ready-to-show", () => {
    // splash.destroy();
    // mainApp.show();

    // Artificial/Fake delay of 0.5 seconds.
    setTimeout(() => {
      splash.destroy();
      mainApp.show();
    }, 500);
  });
});

ipcMain.on("notify", (e, message) => {
  const notification = new Notification({
    title: "Notification",
    body: message,
  });

  notification.show();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
