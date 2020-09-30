const { app, BrowserWindow, Menu } = require("electron");
//main process
const path = require("path");
const url = require("url");
require("electron-reload")(__dirname);
let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "main.html"),
      protocol: "file",
      slashes: true,
    })
  );

  win.on("closed", () => {
    win = null;
  });

  //win.openDevTools();
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  app.quit();
  //   if (process.platform != "darwin") {
  //     app.quit();
  //}
});

app.on("activate", () => {
  if (win == null) {
    createWindow();
  }
});
