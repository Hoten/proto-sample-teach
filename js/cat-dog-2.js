// Delegate prototypes aren’t the great alternative to class inheritance — object composition is

// instead of defining our objects by coming up with concrete hierarchies,
// define our objects based on the features we want

var poop = {
  poop: function() { return '💩'; }
};

var meow = {
  meow: function() { return 'meow...'; }
};

var bark = {
  bark: function() { return 'woof!'; }
};

var drive = {
  drive: function() { return true; }
};

var clean = {
  clean: function() { return true; }
};

var kill = {
  kill: function() { return true; }
};

function Cat() {
  // Object.assign takes an object (1st parameter; in this case, a new object)
  // and copies the subsequent arguments' properties into it.
  // This is how we 'compose' our object definitions.
  return Object.assign(
    {},
    poop,
    meow
  );
}

function Dog() {
  return Object.assign(
    {},
    poop,
    bark
  );
}

function RobotCleaner() {
  return Object.assign(
    {},
    drive,
    clean
  );
}

function RobotKiller() {
  return Object.assign(
    {},
    drive,
    kill
  );
}

function RobotDog() {
  return Object.assign(
    {},
    drive,
    bark
  );
}
