const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  // openHomeFolder: () => {
  //   ipcRenderer.send('open-home-folder');
  // }
  sendArray: (map) => {
    ipcRenderer.send('map-from-ui', map)
  },
})
