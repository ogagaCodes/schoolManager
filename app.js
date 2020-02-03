const express =  require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const chalk = require('chalk');


const app = express();

const port = 3000 || process.env.PORT;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");


const schoolRouter = require('./routes/schoolRoute');
const regRouter = require('./routes/regRoute');
const adminRouter = require('./routes/adminRoute');
const signUpRouter = require('./routes/signUpRoute');
const loginRouter = require('./routes/loginRoute');
const teacherRouter = require('./routes/teacherRoute');
const studentRouter = require('./routes/studentRoute');



app.use(morgan('tiny'));
app.use('/schools', schoolRouter);
app.use('/registration', regRouter);
app.use('/admin', adminRouter);
app.use('/signUp', signUpRouter);
app.use('/login', loginRouter);
app.use('/teachers', teacherRouter);
app.use('/students', studentRouter);

app.get("/", function(req, res){

    res.render("home");
});

app.listen(port, ()=>{
    debug(`server listening on port ${chalk.green(port)}`);
});
