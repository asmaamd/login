const { remote } = require('electron')
const electron = require('electron');
const ipcMain = electron.ipcMain;
//const ipcMain = electron.ipcMain;


//const { PythonShell } = require('python-shell');

//let pyshell = new PythonShell('script.py');




document.getElementById('login-minm-btn').addEventListener('click', () => {
    remote.getCurrentWindow().minimize()
})

document.getElementById('login-close-btn').addEventListener('click', () => {
    remote.app.quit()
})


document.getElementById('singin-btn').addEventListener('click', () => {
    //  document.getElementById("login-show-error").innerHTML = "login success"
    var rq = require('request-promise')
    var get_username = document.getElementById("login-username").value
    var g_pass = document.getElementById("login-password").value
        //  const crypto = require('crypto'),
        //console.log(get_username);
        //  let WIN = localStorage.getItem("test");
        //    get_password = crypto.createHash('sha256').update(g_pass).digest('hex');
        // ipcMain.send('asynchronous-message', "get_username");
        // WIN.webContents.send('asynchronous-message', { 'SAVED': 'File Saved' });
        // ipcMain.send('asynchronous-message', g_pass);



})


/*


document.getElementById("login-toggle-password").addEventListener('click', () => {
    if (document.getElementById('login-password').type === "password") {
        document.getElementById('login-password').type = "text"
        document.getElementById(login - toggle - password).classList.remove('fa-eye-slash')
        document.getElementById(login - toggle - password).classList.add('fa-eye')


    } else {
        document.getElementById('login-password').type = "password"
        document.getElementById(login - toggle - password).classList.remove('fa-eye')
        document.getElementById(login - toggle - password).classList.add('fa-eye-slash')


    }
})*/
