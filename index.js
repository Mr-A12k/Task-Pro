const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
const port = 7000;

app.get('/', (req, res) => {
    res.send(`Hello world this server is connected to port ${port}`);
    console.log("Hello server connected!")
})


app.post('/student',(req,res)=>{
    
})

app.get('/studentDetails', (req,res)=>{
    const d
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