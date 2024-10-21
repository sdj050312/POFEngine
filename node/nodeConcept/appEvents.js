const EventEmitter = require('events');
const emmitter = new EventEmitter(); 
const emmit = new EventEmitter();

emmitter.on('ellie', (arg)=>{
    console.log('first call-back', arg);
});

emmit.on('ellie', (args)=>{
    console.log('second call back', args);

});

emmitter.emit('ellie', {
    message:1
});

emmit.emit('ellie', {
    message:2
 });

 emmitter.emit('ellie', {
    message:3
 });
 console.log('안녕');