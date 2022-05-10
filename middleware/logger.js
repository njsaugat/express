const moment=require('moment')// a library to give the date nicely
const logger=(req,res,next)=>{
    console.log('Fired up after getting the request...')
    // console.log(`${req.protocol}://${req.hostname}${req.url}`);// this is also kinda valid ;here dont use req.host
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`);//moment.format-->like proper time like only nums

    next();
}

module.exports={logger};