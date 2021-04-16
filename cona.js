var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'database'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO user (name, password) VALUES ('x', 'oui')";
    /*  con.query(sql, function(err, result) {
          if (err) throw err;
          console.log("1 record inserted");
      });*/
    con.query("SELECT password FROM user WHERE name='asmaa'", function(err, result, fields) {
        if (err) throw err;
        console.log(result);
    });


});