const express=require('express');
const app=express()
const path=require('path')
const members=require(path.join(__dirname,'members','members.json'))// gives the json obj
const {logger}=require(path.join(__dirname,'middleware','logger.js'))
//SINCE EXPRESS USES LESS LINES OF CODE,MVC PATTERN ISN'T USED 
//Sets the home page
app.get('/', (req,res)=>{
    res.send('<h1>WAY fast with express; can send json even in send; send is awesome</h1>')
})

//Use a middleware; activated after the response
// app.use(logger);//app.use automatically sends all the request,response and next params to logger

//GET all the members
app.get('/api/members',(req,res)=>{
    res.json(members);// with json data always use res.json();
})

//GET a single member
app.get('/api/members/:id',(req,res)=>{//this makes our lives so much easier; dont have to use regex to match id+split string->arr and then get id
    const found=members.some((member)=>(member.id===parseInt(req.params.id)));//the some() method tests whether at least one element in array passes the test implemented in the func
    if(!found){
        res.status(400).send(`No member found with  id of ${req.params.id}`)
    }else{
        // res.json(req.params.id)//only sent the id//so simple; no spliting to get id simply url itself has id;
        res.json(members.filter((member)=>(member.id===parseInt(req.params.id))));
    }
})
const PORT=process.env.PORT||3000

app.listen(PORT,()=>(console.log(`Serving from the port no. ${PORT}`)))