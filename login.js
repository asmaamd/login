const { remote } = require('electron')
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'database'
});

document.getElementById('login-minm-btn').addEventListener('click', () => {
    remote.getCurrentWindow().minimize()
})

document.getElementById('login-close-btn').addEventListener('click', () => {
    remote.app.quit()
})
document.getElementById('singup-btn').addEventListener('click', () => {
    remote.app.quit()
})

document.getElementById('singin-btn').addEventListener('click', () => {
    //  document.getElementById("login-show-error").innerHTML = "login success"
    var rq = require('request-promise')
    var get_username = document.getElementById("login-username").value
    var get_password = document.getElementById("login-password").value


    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO user (name, password) VALUES ('x', 'oui')";
        /*  con.query(sql, function(err, result) {
              if (err) throw err;
              console.log("1 record inserted");
          });*/
        con.query("SELECT password FROM user WHERE name='" + get_username + "'", function(err, result, fields) {
            if (err) throw err;
            //console.log(result);
            if (result[0].password === get_password) {
                document.getElementById("login-show-error").innerHTML = "login success"
            } else {
                document.getElementById("login-show-error").innerHTML = "Tricheur"

            }
        });


    });

    /*
        rq(options).then(function(body) {
            if (body == "login success") {

                document.getElementById("login-show-error").innerHTML = "login success"
            } else {
                document.getElementById("login-show-error").innerHTML = "Username or password Inccorect"
            }
        }).catch(function(err) {

        })
    */
})




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
})



/*
document.getElementById('singin-btn').addEventListener('click',() =>{
    document.getElementById("login-show-error").innerHTML = "login success"
    var rq = require('request-promise')
    var get_username = document.getElementById("login-username").value
    var get_password = document.getElementById("login-password").value

    
    rq(options).then(function(body){
        if(body =="login success"){

            document.getElementById("login-show-error").innerHTML = "login success"
        }else{
            document.getElementById("login-show-error").innerHTML = "Username or password Inccorect"
        }
    }).catch(function(err){

    })

})

*/
