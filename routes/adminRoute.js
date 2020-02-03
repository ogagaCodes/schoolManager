const express= require("express");
const adminRouter = express.Router();

adminRouter.route('/')
.get((req, res)=>{
     res.send("this will be the admin page");
    
})

module.exports = adminRouter;