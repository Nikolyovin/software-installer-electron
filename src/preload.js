const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  // openHomeFolder: () => {
  //   ipcRenderer.send('open-home-folder');
  //   console.log(2222222222222222222);
  // }
});
