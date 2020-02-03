const express= require("express");
const signUpRouter = express.Router();

signUpRouter.route('/')
.get((req, res)=>{
     res.send("this will be the sign up form page");
    
})

module.exports = signUpRouter;