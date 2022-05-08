const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.status(200).send('<h1>hello world;hey</h1>');
})

app.get('/about',(req,res)=>{
    // res.send('<h1>About page; about us</h1>')// like even without writing statusCode, express auto add those into the sent stuff auto
    // res.status(200).json({AboutPage:'about us'})
    // res.status(200).json('hi');
    res.json({hello:'hello there'})// so we can only send json rather than chaining with status code also
    // so       |-- this object is kinda like JS object; as JSON converts it to {"hello":"hello there"};
})
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>console.log(`Serving from port ${PORT}`));