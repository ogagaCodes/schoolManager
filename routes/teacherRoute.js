const express= require("express");
const teacherRouter = express.Router();

teacherRouter.route('/')
.get((req, res)=>{
     res.send("this will be teachers user page");
    
})

module.exports = teacherRouter;