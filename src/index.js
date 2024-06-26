const { app, BrowserWindow, ipcMain, shell } = require('electron')
const path = require('path')
const { intellectInstaller, vncInstaller } = require('./installer')

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit()
}

let mainWindow // определение mainWindow в глобальной области видимости

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false, // важно отключить nodeIntegration
      contextIsolation: true, // включить изоляцию контекста
    },
  })

  // Открытие консоли разработчика
  mainWindow.webContents.openDevTools()

  //отключаем меню
  mainWindow.setMenuBarVisibility(false)

  //development
  mainWindow.loadURL('http://localhost:3000')
  //production
  //...
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

ipcMain.on('map-from-ui', (event, map) => {
  console.log('map', map)
  if (map.get('IntellectV')) {
    console.log('IntellectV', map.get('IntellectV'))
    intellectInstaller()
  } else if (map.get('IntellectS')) {
    console.log('IntellectS', map.get('IntellectS'))
  } else if (map.get('VNC')) {
    console.log('VNC', map.get('VNC'))
    vncInstaller()
  } else if (map.get('Kaspersky')) {
    console.log('Kaspersky', map.get('Kaspersky'))
  }
})
