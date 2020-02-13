const express =  require('express');
//const bodyParser = require('body-parser');
//const { MongoClient } = require('mongodb');
const authRouter = express.Router();
//let debug = require('debug');
//let  morgan = require('morgan');
//let chalk = require('chalk');
/*if ( `development`) {
     debug = require('debug')('app:authRoutes');
     app.use(morgan('tiny'));
     
} */

function router(){
     authRouter.route('/login').post((req, res) => {
          res.send("you have logged in successfuuly");
     })
     return authRouter;
}

module.exports = router;
