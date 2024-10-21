const EventEmitter = require('events');
const emmiter = new EventEmitter; 

function log(){
    emmiter.emit('log', 'started....');
    callbackify();
    emmiter.emit();

}
NODE.exports.log = log;