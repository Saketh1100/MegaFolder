const EventEmitter = require('events');
//EventEmitter is a class

//customEmitter is an instance of EventEmitter
const customEmitter = new EventEmitter();

//Here name of event is response
customEmitter.on('response', (name, id) => {
  console.log(`data received ${name} ${id}`);
})
customEmitter.on('response', () => {
  console.log(`some other logic here `);
})

customEmitter.emit('response', 'saketh', 45)