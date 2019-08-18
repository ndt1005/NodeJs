// Import module "events"
var myEvents = require('events');
var main = require('util');

// create function express
var Person = function (name) {
    this.name = name;
}

main.inherits(Person, myEvents.EventEmitter);

var zaka = new Person('Thinh');
var wolf = new Person('Soi');
var dragon = new Person('Long');

var people = [ zaka, wolf, dragon];

people.forEach(person => {
    person.on('something', function(msg){
        console.log(person.name + ' said that: ' + msg);
    })
});

zaka.emit('something', 'long time no see.');
wolf.emit('something', "I'm a master woft. ");
dragon.emit('something', "I'm kaido");