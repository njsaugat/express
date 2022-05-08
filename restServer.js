const express=require('express');
const app=express();
const path=require('path');
// app.get use garda location + like http.createServer ko jastai syntax lekhna parxa

//Displays home page:
app.get('/',(req,res)=>{
    res.send('<h1>From express!!!--- Blazingly fast</h1>')
    // the thing with express is that we dont have to write the status code;it auto generates the status code
})
//Defining a middleware
const logger=(req,res,next)=>{
    console.log('From the logger. ');
    next();//the next method is essential to like call the other middleware; ani app.use() ma tyo callback rakna parza
}
const log=(req,res,next)=>{
    console.log('WE ARE THE LOGS')
    // next()
}
//Init middleware
app.use(log)
app.use(logger);//we use the .use to pass the middleware; kinda like middleware ko lagi entry point is this .use()
// this logger is a kina


//Gets ALL Members
const memebers=require(path.join(__dirname,'members','members.json'))// I could've made the file to be .js and then liek exported but I chose to make it json
app.get('/api/members',(req,res)=>{
    res.json(memebers);
})

const PORT=process.env.PORT|| 3000;
app.listen(PORT,()=>(console.log(`Serving from ${PORT} port no.`)))



//**************************************** */
    // res.json({message:"hello there"});// like with this we can directly send json without parsing/ or using JSON.stringify;always this takes js object as parameter
    // res.send({message:"Hello there"})// esari ni ni json mathauna mildo raixa tara  
    //res.send() ho esma text, json or j halde ni hunxa; res.send() le afai detect garera contentType set gardinxa unlike res.end() where we had to set the content type
    //res.send([body]) this is syntax where body can be buffer, string ,object araay
    //res.set('Content-Type', 'text/html') -->syntax for setting the content type
    // but the crux is that if data is json then use res.json as res.json gives more functionality
    //+res.send() and res.json() both call res.end() automatically--> https://tpiros.dev/blog/res-json-vs-res-send-vs-res-end-in-express/
    //**************************************** */
