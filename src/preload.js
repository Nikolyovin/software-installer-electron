const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  // openHomeFolder: () => {
  //   ipcRenderer.send('open-home-folder');
  // }
  sendArray: (array) => {
    ipcRenderer.send('array-from-ui', array)
  },
})
