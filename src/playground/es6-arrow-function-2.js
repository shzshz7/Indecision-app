// arguments object - no longer bound with arrow functions


const add = (a,b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(55,1,100));


// this keyword - no long bound

const user ={
    name: 'Harrison',
    cities: ['NYC','Boston'],
    printPlacesLived(){
        return this.cities.map((city)=> this.name + ' has lived in ' + city);
        
    }
};
console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
    // numbers - array of numbers
    numbers: [10,20,30],
    // multipyBy - single number
    multiplyBy:3,
    // multiply - return a new array where the number have been multiplied
    multiply(){
        return this.numbers.map((num) => num*this.multiplyBy);
    }
};

console.log(multiplier.multiply());









