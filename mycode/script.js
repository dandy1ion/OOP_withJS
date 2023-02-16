'use strict';

///////////////////////////////////////////////////////////
//CONSTRUCTOR FUNCTIONS (name always starts with capital letter) & THE NEW OPERATOR
/*
//use function (expression or declaration NOT arrow) to build an object
const Person = function (firstName, birthYear) {
  //console.log(this); //Person{}
  //Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //create method (bad practice!!!DONT DO IT!!!)
  //this.calcAge = function () {
  //console.log(2037 - this.birthYear);
  //};//would be attached to all objects
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);
//4steps:
//1-New empty {} is created
//2-function is called, this = {}
//3-{} linked to prototyps
//4-function automatically returns {} (filled with properties)

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = 'Jay';

console.log(jonas instanceof Person); //true
console.log(jay instanceof Person); //false

//Static Method
//not inherited
Person.hey = function () {
  console.log('Hey there!');
  console.log(this); //constructor function
};

Person.hey();
//jonas.hey();//error, not inherited
*/

/*
/////////////////////////////////////////////////////////////
//PROTOTYPES
//prototype property(object) of the constructor function
console.log(Person.prototype);
//Add METHOD on:
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
}; //method in one place with access to it
//all objects created through this constructor function inherit
//all the methods and properties defined on this prototype property

//use method on jonas & matilda objects
//have access to method through prototypal inheritance
jonas.calcAge(); //46
matilda.calcAge();

//the prototype of jonas:
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); //true
//Person.prototype = the prototype to be used for all objects created by Person
console.log(matilda.__proto__ === Person.prototype); //true

console.log(Person.prototype.isPrototypeOf(jonas)); //true
console.log(Person.prototype.isPrototypeOf(matilda)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false

//set properties on the prototype (each object will have access to it)
Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda); //view in Prototype:species = 'Homo Sapiens'
console.log(jonas.species, matilda.species); //Homo Sapiens Homo Sapiens

//use hasOwnProperty() method:
console.log(jonas.hasOwnProperty('firstName')); //true
console.log(jonas.hasOwnProperty('species')); //false,
//not it's own property but has access to it through prototypal inheritance

////////////////////////////////////////////////////////////////
//PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS

//prototype chain:
console.log(jonas.__proto__); //prototype of jonas
console.log(jonas.__proto__.__proto__); //prototype property of object
//(top of scope chain), (contains: hasOwnProperty)
console.log(jonas.__proto__.__proto__.__proto__); //null, doesn't exist

console.dir(Person.prototype.constructor); //get function its self

const arr = [3, 6, 6, 5, 6, 9, 9]; //short-hand for new ARray === []
console.log(arr.__proto__);
//list of methods you can use on arrays (prototypal inheritance)
console.log(arr.__proto__ === Array.prototype); //true
console.log(arr.__proto__.__proto__);
//prototypal inheritance = method for reusing code

//able to create a new method to use on arrays
Array.prototype.unique = function () {
  return [...new Set(this)]; //return only unique values from array
};
console.log(arr.unique()); //[3, 6, 5, 9]

const h1 = document.querySelector('h1');
console.dir(h1); //object
//Prototype Chain:
//(Prototype = HTMLHeadingElement --> __proto__ = HTMLElement --> __proto__ = Element -->
//Prototype = Node --> Prototype = EventTarget --> Prototype = Object)

console.dir(x => x + 1); //functions are objects =
//able to call methods on them through prototypal inheritance
*/

////////////////////////////////////////////////////////////////////////
//CODING CHALLENGE #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK!!!
*/

/*
const Car = function (make, speed) {
  //Instance Properties
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
  //can also use template literal:
  //console.log(`${this.make} is going at ${this.speed}km/h.`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
  //can also use template literal:
  //console.log(`${this.make} is going at ${this.speed}km/h.`);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

console.log(car1);
car1.accelerate();
car1.brake();
car1.accelerate();

console.log(car2);
car2.brake();
car2.brake();
car2.accelerate();
car2.accelerate();
*/

//////////////////////////////////////////////////////////////////////
//ES6 CLASSES
//classes in JS work different then other languages
//behind the scense classes are just functions

//class expression
//const PersonCl = class {};
/*
//class declaration
class PersonCl {
  //add constructor method
  //(pass in arguments for the properties we want the object to have)
  constructor(firstName, birthYear) {
    //Instance Properties
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //method (outside the constructor = prototypal inheritance)
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  //no commas between methods
  greet() {
    console.log(`Hey ${this.firstName}!`);
  }

  //getter
  get age() {
    return 2037 - this.birthYear;
  } //added as a property (...) = not yet calculated
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica); //look into Prototype = have access to calcAge
jessica.calcAge(); //41
console.log(jessica.age); //41

console.log(jessica.__proto__ === PersonCl.prototype); //true

//works this way too:
//PersonCl.prototype.greet = function () {
//  console.log(`Hey ${this.firstName}!`);
//};
jessica.greet();
*/

/*
//data validation (change firstName to fullName)
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //method
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}!`);
  }

  //getter
  get age() {
    return 2037 - this.birthYear;
  }

  //when you have a setter that is trying to SET A PROPERTY THAT ALREADY EXISTS:
  //add underscore _fullName (creates a new variable)
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  //now set a getter
  get fullName() {
    return this._fullName;
  }

  //Static Method
  static hey() {
    console.log('Hey there!');
    console.log(this); //constructor function
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica); //look into Prototype = have access to calcAge
jessica.calcAge(); //41
console.log(jessica.age); //41

console.log(jessica.__proto__ === PersonCl.prototype); //true

//works this way too:
//PersonCl.prototype.greet = function () {
//  console.log(`Hey ${this.firstName}!`);
//};
jessica.greet();
//1-Classes are NOT hoisted (can NOT call/use it before it's declared)
//2-Classes are first-class citizens(CAN pass into & return from functions)
//3-Classes are executed in strict mode (regaurdless if we have specified it)

//const walter = new PersonCl('Walter', 1965);//get alert
const walter = new PersonCl('Walter White', 1965);
console.log(walter);

//call STATIC METHOD
PersonCl.hey();

//////////////////////////////////////////////////////////////////////
//SETTERS AND GETTERS (special properties = assessor properties)
//(normal properties = data properties)
//set and get values

//object literal
const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  //method with getter
  get latest() {
    return this.movements.slice(-1).pop();
  },

  //method with setter (needs to have exactly one parameter)
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); //write like just a property (without())

//now like a property (can set it =)
account.latest = 50;
console.log(account.movements); //[200, 530, 120, 300, 50]

//CLASSES have getters and setters as well
//useful for data validation

//////////////////////////////////////////////////////////////////
//STATIC METHODS
//built in Array.from method
//from method is not a function
//all arrays do not inherit it (attached to the array constructor)
//Number.parseFloat (another example)

////////////////////////////////////////////////////////////////////
//OBJECT.CREATE
//3rd way to implement prototypal inheritance
//use to manually set the prototype of an object to any other object

//object literal
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  //new method to create properties dynamically
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven); //{} empty object with calcAge in Prototype Object
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge(); //35

console.log(steven.__proto__); //PersonProto
console.log(steven.__proto__ === PersonProto); //true

const sarah = Object.create(PersonProto);
//call new method from object on sarah
sarah.init('Sarah', 1979);
sarah.calcAge(); //58
*/

///////////////////////////////////////////////////////////////////
//CODING CHALLENGE #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK!!!
*/
/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h.`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h.`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const lambo = new CarCl('Lambo', 355);
console.log(lambo.speedUS); //converts to mph = 221.875
lambo.accelerate();
lambo.accelerate();
lambo.brake();
lambo.brake();
lambo.speedUS = 90; //set new speed from mph to km/h = 144
console.log(lambo);


///////////////////////////////////////////////////////////////////////
//INHERITANCE BETWEEN 'CLASSES': CONSTRUCTOR FUNCTIONS

const Person = function (firstName, birthYear) {
  //Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

//usually want child class to have same functionality as the parent class but
//with some additional functionality
//pass in same arguments and some additional ones
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); //way to connect the Parent to the child class
  //this way any changes that happen in the Parent will carry over to the child
  this.course = course;
};

//Linking prototypes
//must be here in code setup
Student.prototype = Object.create(Person.prototype);
//must make connection before we add any more methods to the prototype object of student

//create a method
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__); //Person prototype with introduce function from Student
console.log(mike.__proto__.__proto__); //Person prototype with calcAge function

//check prototype chain
console.log(mike instanceof Student); //true
console.log(mike instanceof Person); //true
console.log(mike instanceof Object); //true

Student.prototype.constructor = Student; //Fix for bellow result
console.dir(Student.prototype.constructor); //Person???
*/

//////////////////////////////////////////////////////////////////////
//CODING CHALLENGE #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK!!!
*/
/*
const Car = function (make, speed) {
  //Instance Properties
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h.`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h.`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

//Link the prototypes
//want the prototype property from EV to inherit from...
//the prototype property of Car
EV.prototype = Object.create(Car.prototype);

//Add methods
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

//implement an accelerate method
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--; //decrease charge by 1%
  console.log(
    `${this.make} is going at ${this.speed}km/h, with a charge of ${this.charge}.`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
//EV {make: 'Tesla', speed: 120, charge: 90}
//charge:90
//make:"Tesla"
//speed:120
//[[Prototype]]:Car
//accelerate:ƒ ()
//chargeBattery:ƒ (chargeTo)
//[[Prototype]]:Object
//accelerate:ƒ ()
//brake:ƒ ()
//constructor:ƒ (make, speed)
//[[Prototype]]:Object
tesla.brake();
tesla.accelerate(); //EV accelerate called(first one in chain) POLYMORPHISM
//child class can overwrite a method that it inherited from the parent class
*/

//////////////////////////////////////////////////////////////////////////
//INHERITANCE BETWEEN 'CLASSES': ES6 CLASSES
//need 2 things: the extend keyword and the super function

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //method
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}!`);
  }

  //getter
  get age() {
    return 2037 - this.birthYear;
  }

  //when you have a setter that is trying to SET A PROPERTY THAT ALREADY EXISTS:
  //add underscore _fullName (creates a new variable)
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  //now set a getter
  get fullName() {
    return this._fullName;
  }

  //Static Method
  static hey() {
    console.log('Hey there!');
    //console.log(this); //constructor function
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //always needs to happen first (creates 'this' keyword in subclass)
    super(fullName, birthYear); //pass in arguments from Parents Constructor
    this.course = course;
  }
}
