const express = require("express");
const router = express.Router();

const userModel = require('./users');


router.get("/", function (req, res) {
    res.render("index");
});

router.post('/user', function (req, res) {
    res.send(req.body.question);

});

/*
const admin = require("firebase-admin");
const ServiceAccountKey = require("./survey-app-275007-firebase-adminsdk-mq2rp-377f7c2daa.json");



admin.initializeApp({
    credential: admin.credential.cert(ServiceAccountKey),
    databaseURL: "https://survey-app-275007.firebaseio.com"
});

const db = admin.firestore();

let data = {
    name: 'Los Angeles',
    state: 'CA',
    country: 'USA'
  };

  // Add a new document in collection "cities" with ID 'LA'
  let setDoc = db.collection('cities').doc('LA').set(data);
*/



module.exports = router;
