const express=require('express');
const app=express();
const path=require('path')
const {router}=require(path.join(__dirname,'routes','api','members.js'));//returns the func; use{ } to export func

//Body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//Members API routes;uses middleware kinda like exported the router function from the file;middlware-->uses req,res; middlware auto gets req,resw
app.use('/api/members',router);//usage of middleware;since middleware->req,res already sent
//since we are sending the routes /api/members -> specifically api ko lagi vanera sent so that's the default route for which router will be used
const PORT=process.env.PORT|| 3000;
app.listen(PORT,()=>(console.log(`Serving from the port no.${PORT}`)))