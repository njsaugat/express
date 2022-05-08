const express=require('express')
const path=require('path');
const app=express();

// app.get('/',(req,res)=>{
//     // chaining of APIs in res is possible+ we can directly send without defining the content type
//     // res.status(200).send('<h1>Hello from express</h1>');
//     //different stuff that we can send: res.sendFile();res.json();
//     //res.render();--> this helps to render the HTML file using some engine; prolly used for view stuff hola
//     // to render template to server we use ejs
//     res.sendFile(path.join(__dirname,'public','index.html'));
// })



//***************************************************** */
//unlike in plain node js where we had to create dynamic file path+ use switch case to set the content type to serve the static file
// here in express we can directly use a middleware that can like make a folder as static; 
// in case of static folder we dont have to take care of managing the url and http method
// the http method is always GET and the req.url will be handled along with the particular extensions
// directly by the middleware
// node ko mannual work yaha express le middleware use garera gardinxa
//***************************************************** */

//Set static folder with one line
app.use(express.static(path.join(__dirname,'public')));
//esari garda chai like index.html && about.html vanerai lekhnxa parxa;
// like purai url ma chai tesari nai lekhna parxa; because we need to pass the full path

const PORT=process.env.PORT||3000;//can go in config file only; while running server might have port number in environment var based on the protocol 
app.listen(PORT,()=>(console.log(`Serving from port ${PORT} no.`)))