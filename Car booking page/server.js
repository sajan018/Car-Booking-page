const express = require("express");
const app = express();
const path = require("path");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");

app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

let db_data;
let usercollection;

MongoClient.connect("mongodb+srv://sajan:sajan@cluster0.cug7zzx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(function(database) {
        console.log("MongoDB connected");
        db_data = database.db("CarBookingData");
        usercollection = db_data.collection("carBooking");
    })
    .catch(function(error) {
        console.log("Error connecting to MongoDB:", error);
    });

app.post("/book", function(req, res) {
    console.log(req.body.email);
    let obj = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phoneNumber,
        pickupLocation: req.body.pickupLocation,
        pincode: req.body.Pincode,
        gender: req.body.gender
    };
    usercollection.insertOne(obj).then(function(){
        res.sendFile(path.join(__dirname, "thanku.html"));
    });
});

app.listen(3000, function(){
    console.log("Server start");
});
