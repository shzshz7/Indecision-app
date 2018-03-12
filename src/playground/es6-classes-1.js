
class Person {
    constructor(name = 'No Name'){
        this.name = name;
        // console.log('test');
    }

    getGreeting(){
        // return 'Hi, I am ' + this.name + '!';
        return `Hi, I am ${this.name}!`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

const me = new Person('Harrison Song');
console.log(me.getGreeting());

const other = new Person();

//challenge
//setup constructor to take name and age (default to 0)
//getDesciption - name is age years old
// class NewPerson {
//     constructor(name = 'Anonymous', age = 0){
//         this.name = name;
//         this.age = age;
//     }

//     getDescription(){
//         return `${this.name} is ${this.age} year(s) old.`
//     }
// }
// const henry = new NewPerson('Henry', 1);
// console.log(henry.getDescription());

class Student extends Person{
    constructor(name, age, major){
        super(name,age);
        this.major = major;
    }

    haveMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();

        if(this.haveMajor()){
            description += ` Their major is ${this.major}.`;
        }

        return description;

    }

}

const harr = new Student('Harr', 29, 'MBA');
console.log(harr.haveMajor());
console.log(harr.getDescription());

const lucy = new Student('Lucy', 28);
console.log(lucy.haveMajor());
console.log(lucy.getDescription());


//challenge
//Traveler -> Person
// add homeLocation
// override getGreeting;

class Traveler extends Person{
    constructor (name, age, homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    // hasLocation(){
    //     return !!this.homeLocation;
    // }
    getGreeting(){
        let greeting = super.getGreeting();
        if (this.homeLocation){
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

const mike = new Traveler('Mike', 26,'MA');
console.log(mike.getGreeting());
const jack = new Traveler();
console.log(jack.getGreeting());

