const electron = require('electron');
const { remote } = require('electron')
const localStorage = require('localStorage')
const app = electron.app;
var path = require('path');

const BrowserWindow = electron.BrowserWindow;
var loginWindow
app.on('ready', function() {

    loginWindow = new BrowserWindow({
        width: 450,
        height: 600,
        maxheight: 600,
        maxwidth: 300,

        // CONSTRUIRE WINDOW PERSONNALISE
        frame: false,
        titleBarStyle: "hidden",

        // resize
        resizable: false,
        maximizable: false,
        backgroundColor: '#2f4f4f',

    })

    loginWindow.loadURL('file://' + __dirname + '/html/login.html')

    /* loginWindow.once('ready-to-show',function(){
         loginWindow.show()
     })*/
    loginWindow.webContents.openDevTools();
    /*   ipcMain.on('asynchronous-message', (event, arg) => {
            console.log(arg)
        })*/
    //localStorage.setItem("test", loginWindow);
   


})

/*
app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit()

})*/
