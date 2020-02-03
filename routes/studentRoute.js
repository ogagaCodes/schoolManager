const express= require("express");
const studentRouter = express.Router();

studentRouter.route('/')
.get((req, res)=>{
     res.send("this will be the student info page");
    
})

module.exports = studentRouter;