const EventEmitter = require('events');
const emmiter =  new EventEmitter;

function log(callback){
    emmiter.emit('log', 'started...');
    callback();
    emmiter.emit('log', 'ended');
}
NODE.exports.log = log; 