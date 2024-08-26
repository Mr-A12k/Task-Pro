const express = require('express');
const mongoose = require('mongoose');

const assignmentRouter = require('./routes/assignmentRouter');
const courseDetailsRouter = require('./routes/courseDetailsRouter');
const courseRouter = require('./routes/courseRouter');
const loginRouter = require('./routes/loginRouter');
const registerRouter = require('./routes/registerRouter');
const progressRouter = require('./routes/progressRouter');
const protectedRouter = require('./routes/protectedRouter');

const app = express();

app.use(express.json());
app.use('/api',registerRouter);
// app.use('/api',loginRouter);
// app.use('/api/assignment',assignmentRouter);
// app.use('/api/course',courseRouter);
// app.use('/api/courseDetails',courseDetailsRouter);
// app.use('/api/progress',progressRouter);
// app.use('/api/protected',protectedRouter);


const port = 7000;

app.get('/', (req, res) => {
    res.send(`Hello world this server is connected to port ${port}`);
    console.log("Hello server connected!")
})


app.post('/student',(req,res)=>{
    
})

app.get('/studentDetails', (req,res)=>{
   
})



mongoose.connect("mongodb://localhost:27017/TaskPro", { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("Database connected!");
    app.listen(port, () => {
    console.log("Server connected !");
});
})
.catch(()=>{
    console.log("connection error!");
});