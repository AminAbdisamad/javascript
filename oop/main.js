// //create constructor

// //create person constructor

// function Person(firstName, lastName , dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
// }


// //create object from the constructor
// const amin = new Person('Amin','Abdisamad','10-10-1990');
// const halima = new Person('Halima','Abdisamad','10-10-1994');
// //console.log(amin.fullName());
// //console.log(amin.calculateAge());

// /* Prototypes in javascript
// ---------------------------
// Two types of prototypes in javascript
// - object prototypes
// - constructor prototypes*/
// Person.prototype.fullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }
// Person.prototype.calculateAge = function(){
//     let diff = Date.now() - this.birthday;
//     diff = new Date(diff);
//     return Math.abs(diff.getUTCFullYear() - 1970);

// }
// //halima gets married
// Person.prototype.getMarried = function(newLastName){
//     this.lastName = newLastName;

// }
// halima.getMarried('Adam');
// // console.log(amin.fullName());
// // console.log(halima.fullName());
// // console.log(amin.calculateAge());


// /* Prototype inheritance*/

// Person.prototype.greeting = function(){
//     return `Hello there ${this.firstName} ${this.lastName}`;
// }
// const person1 = new Person('Hassan',"Ahmed");
// //console.log(halima.greeting());

// //craete customer constructor
// function Custormers (firstName,lastName,birthday,phone,membership){
//     Person.call(this, firstName ,lastName,birthday);
//     this.phone = phone;
//     this.membership = membership;
// }
// Custormers.prototype.greeting = function(){
//     return `Hello there, ${this.firstName} ${this.lastName} Welcome to our organization`;
// }
// const customer1 = new Custormers('Omar','Yusuf','10-10-1990','555-555-5555','Premium');

// //console.log(customer1.greeting());

// //Prototype inheritance
// Custormers.prototype = Object.create(Person.prototype);
// Custormers.prototype.constructor = Custormers;


// /* Object Create */

// const personprototypes = {
//     greeting : function(){
//         return `Hello, ${this.firstName} ${this.lastName}`;
//     }

// }
// const person2 = Object.create(personprototypes);
// person2.firstName = 'Hassan';
// person2.lastName = 'Amin';
// person2.age = 30;
// console.log(person2);
// console.log(person2.greeting());

// const orhan = Object.create(personprototypes, {
//     firstName: {value: 'Orhan'},
//     lastName:{value:'valey'},
//     age : {value : 30}
// });
// console.log(orhan.greeting());




class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = new Date(dob);

    }
    greeting(){
        return `Hello, ${this.firstName} ${this.lastName}`
    }
    calculateAge(){
        let diff = Date.now() - this.age;
        diff = new Date(diff);
        return Math.abs(diff.getUTCFullYear() - 1970);
    }
    static addNumbers(x,y){
        return x + y;
    }
}

const person1 = new Person('Hassan','Amin','10-12-1988');
// console.log(person1.greeting());
// console.log(person1.calculateAge());
// console.log(Person.addNumbers(4,59));

class customers extends Person {
    constructor(firstName,lastName,phone,membership){
        super(firstName,lastName);
        this.phone = phone;
        this.membership = membership;

    }
}
const customer1 = new customers('Mohamed Amin','Abdisamad','555-555-5555','Standard');
console.log(customer1.greeting());
