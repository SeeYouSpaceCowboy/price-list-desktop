const { app } = require('electron')
const path = require('path')

const MainWindow = require('./app/main-window')

let mainWindow

app.on('ready', () => {
  mainWindow = new MainWindow()

  mainWindow.loadURL(path.join(__dirname, '/views/index.html'))
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })
})
