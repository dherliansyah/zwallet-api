const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));

// START ROUTING PROFILE
const userProfile = require('./data/profile')
    app.use('/profile', userProfile)


// START ROUTING TRANSFER
const confirmTransfer = require('./data/transfer')
    app.use('/transfer', confirmTransfer)

// START ROUTING TOPUP
const dataTopup = require('./data/topup')
    app.use('/topup', dataTopup)

app.listen('8000',()=>{
    console.log('Server runnning out')
})