const event=require('events')
const eventEmitter=new event.EventEmitter;
// console.log(eventEmitter);
eventEmitter.on('hello',(id)=>{
    console.log(`hello how do you do of ${id}?`)
})

eventEmitter.emit('hello', 34232);



