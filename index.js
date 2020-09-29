const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

// START ROUTING PROFILE
const userProfile = require('./data/profile')
if(userProfile){
    app.use('/profile', userProfile)
}else{
    console.log("data salah")
}

// START ROUTING TRANSFER
const confirmTransfer = require('./data/transfer')
if(confirmTransfer){
    app.use('/transfer', confirmTransfer)
}else{
    console.log("data salah")
}

// START ROUTING TOPUP
const dataTopup = require('./data/topup')
if(dataTopup){
    app.use('/topup', dataTopup)
}else{
    console.log("data salah")
}

app.listen('8000',()=>{
    console.log('Server runnning out')
})