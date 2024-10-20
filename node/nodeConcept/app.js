const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('elie', (args)=>{
    console.log('first callback -', args);
});

emitter.on('elie', (args)=>{
    console.log('second callback -', args);
});

emitter.emit('elie', (args) => {
    console.log('third callback', args);
});

const callback1 = (args) =>{
    console.log('첫번째 콜백', args);
}


emitter.emit('elie', {message: 1}); // 이벤트 이름과 전달할 데이터를 작성 
emitter.emit('elie', {message: 2});
emitter.removeListener('elie', callback1);
emitter.emit('elie', {message: 3});
