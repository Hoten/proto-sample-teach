/*

Dogs bark
Cats meow
Dogs and Cats poop

Animal
  - poop()
  
  Cat
    - meow()
  Dog
    - bark()

RobotCleaners clean
RobotKillers kill
Robots drive

Robot
  - drive()

  RobotCleaner
    - meow()

  RobotKillers
    - kill()

This is classical inheritance.
*/

// ES6 allows for this 'class' shortcut. The below code is equivalent to creating a function named Animal and giving its prototype a method 'poop'.
class Animal {
  poop() {
    return '💩';
  }
}

// the 'extends' keyword sets Cat's prototype to Animal
class Cat extends Animal {
  meow() {
    return 'meow...';
  }
}

class Dog extends Animal {
  bark() {
    return 'woof!';
  }
}

class Robot {
  drive() {
    return true;
  }
}

class RobotCleaner extends Robot {
  clean() {
    return true;
  }
}

class RobotKiller extends Robot {
  kill() {
    return true;
  }
}

// client has requested a RobotDog that can drive and bark, but does not poop.
// classical, single inheritance can lead to object designs that just don't work.

// class RobotDog extends ??? {

// }
