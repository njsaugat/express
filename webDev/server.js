const express=require('express');
const {router}=require('./routes/router')
const app=express()

app.set('view engine','ejs');//the view engine lai use garne middleware is defined kinda in the main server 
app.use(router);

// All the routes are defined in the router
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>(console.log(`Serving from port no. ${PORT}`)))
