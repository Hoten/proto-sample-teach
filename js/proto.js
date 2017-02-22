// this is a constructor function. The 'new' keyword can be used to create an instance of Animal.
var Animal = function() {
  this.isAlive = true;
};

// make 'eat' method available to all instances of Animal
Animal.prototype.eat = function() {
  console.log('nom nom nom...');
};

var animal = new Animal();
animal.eat(); // nom nom nom...
console.log(animal.isAlive); // true

function Dog(name) {
  this.name = name;
}

Dog.prototype = new Animal();

Dog.prototype.bark = function() {
  console.log(this.name + ': woof!');
};

var fido = new Dog('Fido');

// fido does not have an 'isAlive' property, so the JS engine looks up the prototype chain at Animal
console.log(fido.isAlive); // true

fido.eat(); // nom nom nom...
fido.bark(); // Fido: woof!

// Object definition can change at runtime

Animal.prototype.chew = function() {
  console.log('*chew*');
};

fido.chew(); // *chew*
