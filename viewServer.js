const express=require('express')
const app=express()
//sets the view engine to automatically look for views folder ;//a place ie simple server to explore views

app.set('view engine','ejs');

//sets the view path to a specific folder 
// app.set('view','view_name(path kinda)');

app.get('/',(req,res)=>{
    const blogs=[//kinda json
        {title:'Yoshi finds eggs', snippet:'Lorem ipsum dolor sit amet consectetur adipisicing'},
        {title:'Mario finds stars', snippet:'Lorem ipsum dolor sit amet consectetur adipisicing'},
        {title:'How to defeat the browser', snippet:'Lorem ipsum dolor sit amet consectetur adipisicing'},
    ]
    res.render('index',{title:'Home',blogs})
})



app.get('/about',(req,res)=>{
    res.render('about',{title:'Contact US',about:'Know more about us'});
})

app.get('/blogs/create',(req,res)=>{
    res.render('blogs',{title:'Create Blogs'})
})

app.use((req,res,next)=>{
    res.status(404).render('404',{title:'404--Error'})
})


const PORT=process.env.PORT||3000;
app.listen(PORT,()=>(console.log(`Serving from port no. ${PORT}`)))