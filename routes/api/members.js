// not all ROUTES might deal with APIs;
//so this is the particular folder for dealing with APIs

const express=require('express');
const router=express.Router()
const path=require('path')
const uuid=require('uuid')
let members=require('../../members/members.json')//making the id as string makes more sense
const fs=require('fs');
const { request } = require('http');
// A util function that writes to the json
const utilWriteToFile=()=>{
    fs.writeFile('/home/njsaugat/codePlay/express/members/members.json',
    JSON.stringify(members)//adding data to json file means we have to convert it first into JSON so-->into JSON.stringify() (VIQ)
    ,(err)=>{
        if(err){
            console.log(err);
        }
    })
}


// since server batai home route for the API is defined as /api/members/; we dont have to set that here;only set sth after this 

//gets all members
router.get('/',(req,res)=>{//when using router we use router. instead of app.
    res.json(members);
})

//gets member of particular id
router.get('/:id',(req,res)=>{
    const found=members.some((member)=>(member.id=== (req.params.id)));
    if(!found){
        res.status(400).send(`No member found with the id ${req.params.id}`);
    }else{
        res.json(members.filter((member)=>(member.id=== (req.params.id))));
    }
})


//Create Member
router.post('/',(req,res)=>{
    //In node js we had to like use event emitter (like req.on('data') && req.on('end))to first get the data in terms of buffer->convert toString; then like parse into object and then send to user
    // res.json(req.body)//directly express ma req.body garera json body auxa
    // res.json(req.body)//to get the result back, we need to use a body parser-->so that we can parse the data that we're sending in the body
    //we dont only want to create but also store it into db;since we aren't using MVC we can do addition here only

    const newMember={id:uuid.v4(),...req.body,status:'active'}
    if(!newMember.name || !newMember.email){
        return res.status(400).json({msg:"Plz inculude the name and email"})
    }
    members.push(newMember);//also add to the file ie write to file
    // console.log(__dirname)
    utilWriteToFile();

    res.json(newMember);
    
})
//update the member:
router.put('/:id',(req,res)=>{
    const requestBody=req.body;
    //we have to also find the original stuff
    const orignalMember=members.filter((member)=>(member.id=== (req.params.id)))[0]
    if(!orignalMember){
        return res.json({msg:`no member with  id ${req.params.id} to update`})
    }
    const finalBody={
        id:orignalMember.id,
        name:requestBody.name||orignalMember.name,
        email:requestBody.email||orignalMember.email,
        status:orignalMember.status
    }
    const index=members.findIndex((member)=>(member.id=== (req.params.id)))
    members[index]=finalBody;
    utilWriteToFile();
    res.json(finalBody);

})

//delete a member
router.delete('/:id',(req,res)=>{
    //to check if the member is there in the json or not
    const found=members.some((member)=>(member.id===req.params.id));
    if(!found){//if not found then return directly
        return res.json({msg:`no member with  id ${req.params.id} to delete`})
    }
    members=members.filter((member)=>(member.id!== (req.params.id)))
    utilWriteToFile();
    res.json({msg:`The member of the id ${req.params.id} was successfully deleted`})
})
module.exports={router};//so simple esari export garesi pugdo raixa; last sajilo