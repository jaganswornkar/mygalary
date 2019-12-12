const express = require('express')
const app = express();
const cors = require('cors');

app.use(express.json())
app.use(cors())

// app.use(dbConnection())
const Sequelize = require("sequelize");
const db = require("./models");

// creating routers for endpoints-------------------

var route = express.Router();

require('./routes/index')(db,route);
app.use('/',route)






app.listen(PORT=8001,()=>{
    console.log('Your app is running on port :',PORT)
})