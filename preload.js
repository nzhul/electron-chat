const { ipcRenderer, contextBridge } = require("electron");

// dido: the name 'electron' can be anything for example > myAPI
contextBridge.exposeInMainWorld("electron", {
  notificationAPI: {
    sendNotification(message) {
      ipcRenderer.send("notify", message);
    },
  },
  batteryAPI: {},
  fileAPI: {},
});
