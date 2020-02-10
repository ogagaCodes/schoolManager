const express= require("express");
const schoolRouter = express.Router();

schoolRouter.route('/')
.get((req, res)=>{
     res.render("school.ejs");
    
})

module.exports = schoolRouter;