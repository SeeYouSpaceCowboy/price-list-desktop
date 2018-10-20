const { app, BrowserWindow } = require('electron')

class MainWindow extends BrowserWindow {
  constructor() {
    super({
      width: 400,
      height: 600,
      title: "Price List",
      show: true
    })
  }
}

module.exports = MainWindow
