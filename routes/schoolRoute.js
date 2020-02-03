const express= require("express");
const schoolRouter = express.Router();

schoolRouter.route('/')
.get((req, res)=>{
     res.send("this will display all schools");
    
})

module.exports = schoolRouter;