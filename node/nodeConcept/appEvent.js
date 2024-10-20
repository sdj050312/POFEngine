const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('ellie' , (args)=>{
    console.log('first call-back', args);
});

emitter.on('ellie', (args) =>{
    console.log('second-call-back', args)
});

emitter.emit('ellie',{
    message:1
} );
emitter.emit('ellie',{
    message:2
} );
emitter.emit('ellie',{
    message:3
} );
console.log('안녕');