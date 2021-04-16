const electron = require('electron')
const app = electron.app
var path = require('path')
const BrowserWindow = electron.BrowserWindow


app.on('ready',function(){
    let loginWindow = new BrowserWindow({
        width:450,
        height:600,
        maxHeight: 600,
        maxWidth : 600,

        frame : false,
        titleBarStyle :"hidden",
        resizable : false,
        backgroundColor :'#B0C4DE'
/*
        webPreferences :{ 
            preload : path.join(__dirname,'preload.js'),
            nodeIntegration :true
        } */
    })
    loginWindow.loadURL('file://'+__dirname+'/html/login.html')

    loginWindow.once('ready_to_show',function(){
        loginWindow.show()
    })



})

app.on('window-all-closed',function(){
    if(process.platform !=='darwin') app.quit()
})