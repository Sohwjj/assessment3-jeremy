// Libraries
const express = require("express");
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const cors = require('cors');


// Create instance of express
const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json({limit: "50mb"}));
app.use(cors());

// Angular prod
app.use(express.static(__dirname + "/public"));


const credFile = process.env.SERVICEACC_CRED_FILE || "./think.json";
console.log(credFile);
var serviceAccount = require(credFile);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://food-diary-e665d.firebaseio.com"
});

const API_URI = "/api";
admin.firestore.FieldValue.serverTimestamp();
var db = admin.firestore();
var stallCollection = db.collection('food-stall');
var foodCollection = db.collection('food-stall').doc('LDA4jeURPmzKpTCPtibY').collection('food-menu');

app.get(API_URI + '/stall-list',(req, res)=>{
    stallCollection.get()
    .then(snapshot => {
      let stallArr = [];
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        stallArr.push(doc.data());
      });
      res.status(200).json(stallArr);
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
});

app.get(API_URI + '/food-list',(req, res)=>{
    foodCollection.get()
    .then(snapshot => {
      let foodArr = [];
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        foodArr.push(doc.data());
      });
      res.status(200).json(foodArr);
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
});


app.post(API_URI + '/add', (req, res)=>{
    let stallInfo = req.body;
    stallInfo = { ...req.body};
    console.log(req.body.stallName);
    stallCollection
        .add(stallInfo)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json(error));
})


app.listen(3000, ()=>{
    console.info("Webserver started on port 3000");
});