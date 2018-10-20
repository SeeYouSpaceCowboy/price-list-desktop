const { app } = require('electron')
const path = require('path')
const url = require('url')

const MainWindow = require('./app/main-window')

let mainWindow

app.on('ready', () => {
  mainWindow = new MainWindow()

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'views', 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })
})
