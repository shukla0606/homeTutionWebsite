const express = require('express');
const path = require('path');

//
const bodyParser = require('body-parser');
const mysql = require('mysql');
//


const app = express();
//
app.use(bodyParser.urlencoded({ extended: true }));
//

//setting up mysql connection 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root1998',
    database: 'websitedatabase'
});

connection.connect();
//

// temp changes 
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/index.html'));

});

//
//

app.post('/tutor.html', (req, res) => {
    const { namee, email, mobile, qualification, subject, classs, aadhar, message,date } = req.body;


    //

    // inserting data into the data base

    connection.query(
        'INSERT INTO tutor(name,email,mobile,qualification,subject,class,aadhar,message,date) VALUES(?,?,?,?,?,?,?,?,?)', [namee, email, mobile, qualification, subject, classs, aadhar, message,date],
        (error) => {
            // res.send("Registred Sucessfully"); this line is working
            // res.sendFile(__dirname+"/index.html");
            // res.redirect("/");
            res.sendFile(path.join(__dirname + '/public/sucess.html'));


        }

    );

});


// for student form 
app.post('/index.html', (req, res) => {
    const { namee, email, mobile,classs, addresss,date } = req.body;


    //

    // inserting data into the data base

    connection.query(
        'INSERT INTO student(name,email,mobile,class,address,date) VALUES(?,?,?,?,?,?)', [namee, email, mobile,classs,addresss,date],
        (error) => {
            
            res.sendFile(path.join(__dirname + '/public/sucess.html'));


        }

    );

});

//for detail form

app.post('/detail.html', (req, res) => {
    const { namee, email, mobile,classs, addresss,date } = req.body;


    //

    // inserting data into the data base

    connection.query(
        'INSERT INTO student(name,email,mobile,class,address,date) VALUES(?,?,?,?,?,?)', [namee, email, mobile,classs,addresss,date],
        (error) => {
            // res.send("Registred Sucessfully"); this line is working
            // res.sendFile(__dirname+"/index.html");
            // res.redirect("/");
            res.sendFile(path.join(__dirname + '/public/sucess.html'));


        }

    );

});








app.use(express.static(path.join('public')));

app.listen(3000, () => {
    console.log("app listening on port 3000");
});