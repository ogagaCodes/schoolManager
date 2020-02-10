const express= require("express");
const regRouter = express.Router();

regRouter.route('/')
.get((req, res)=>{
     res.render("registration.ejs");
    
})

module.exports = regRouter;