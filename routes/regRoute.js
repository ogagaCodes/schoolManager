const express= require("express");
const regRouter = express.Router();

regRouter.route('/')
.get((req, res)=>{
     res.send("this will be the registration form page");
    
})

module.exports = regRouter;