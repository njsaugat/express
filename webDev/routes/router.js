const express=require('express');
const router=express.Router();



router.get('/' ,(req,res)=>{// the callback function passed here could also take next as parameter
    // res.sendStatus(200);
    res.render('index',{tell:"hello hi"})
    
})


const quotes=[
    {author:'Sam Phoe', quote:"Eye for eye makes world blind"},
    {author:'Gandi', quote:"Greed is bad"},
    {author:'Ram', quote:"Don't listen bad"},
    {author:'Sita', quote:"Demon and god both are within you"},

]

router.get('/quotes',(req,res)=>{
    res.render('quotes',{quotes})//we always have to pass an object 
})


router.get('/member/:idYour',(req,res)=>{
    console.log('hello')
    console.log(req.text);
    res.send(`Hello! Your id is ${req.params.idYour}`)
    //whatever name is given after the colon :, we have to access the variable (here id) with the same name in req.params.id ;ie dynamic parameter
    // this is dynamic router; so this has to be at bottom bcz like express is top to bottom so; any endpoint that is like after member will match this if it's kept above
})

router.param('idYour',(req,res,next,id)=>{
    console.log(id);
    req.text='hello1321';
    next();
})
module.exports={router}