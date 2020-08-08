const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

//app.use(bodyParser);
app.use(bodyParser.json()); //Make sure u have added this line
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//create database connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydata'
});

//connect to database
conn.connect((err) => {
    if (err) throw err;
    console.log('Mysql Connected...');
});
//show all products
app.get('/login',(req,res) =>{
    console.log(req.query.username)
    console.log(req.query.password)

    var username = req.query.username;
    var password = req.query.password;
    
    if (username && password){
        var sql="SELECT email, password FROM `users` WHERE `email`='"+username+"' and password = '"+password+"'"; 
        let query = conn.query(sql);
            if(query){
                console.log("success");
            }
            else{
                console.log("unsucessful")
            }
    }                      
        
    else{
        res.send("enter username and password");
    }
})
app.get('/reg',(req,res) =>{
    console.log(req.query.name)
    console.log(req.query.username)
    console.log(req.query.password)
    console.log(req.query.gender)

    var name = req.query.name;    
    var username = req.query.username;
    var password = req.query.password;
    var gender = req.query.gender;
    
    if (username && password){
        var sql="INSERT INTO register(name, email, password, gender) VALUES ('"+name+"', '"+username+"', '"+password+"', '"+gender+"') "; 
        let query = conn.query(sql, (err, results) => {
            if (err) {
                throw err;
            }
            else {
                                  console.log(results);
                    res.send(results);
               
                          
             
            }
        
        });                          
    }
    else{
        res.send("enter username and password");
    }
})
app.post('/getdata', (req, res) => {
    // let sql = "SELECT * FROM users";
    // let query = conn.query(sql, (err, results) => {
    //     if (err) throw err;
    //     console.log(req.body);
    //     var abc = JSON.parse(req.body)
    //     res.send(req.query);
    // });
    console.log(req.body);

    //var abc = JSON.parse(req.body)
    res.send(req.body);
});
try {
    app.listen(3000, () => {
        console.log('Server started on port 3000');
    });

} catch (err) {
    console.error(err, 'ok');
    process.exit();
}