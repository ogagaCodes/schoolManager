
const express= require("express");
const loginRouter = express.Router();

loginRouter.route('/')
.get((req, res)=>{
     res.render('login.ejs');
    
});

module.exports = loginRouter;