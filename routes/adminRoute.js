/* eslint-disable no-undef */
const express= require("express");
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const adminRouter = express.Router();
let debug = require('debug');
let chalk = require('chalk');
if ( `development`) {
     debug = require('debug')('app:adminRoute');
}


    function router(nav){
     adminRouter.route('/')
     .get((req, res)=>{
          res.send("adding students");
         
     })

     return adminRouter;
    }


module.exports = router;