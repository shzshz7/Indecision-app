var nameVar = 'Harrison';
var nameVar = 'Mike';
console.log('nameVar', nameVar);


let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
// nameConst = 'Gunther'; error
console.log('nameConst', nameConst);


// Block scoping
const fullName = 'Andrew Mead';
let firstName;

if(fullName){
    const firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);



// function getPetName(){
//     const petName = 'Hal';
//     return petName;
// }

// const petName = getPetName();
// console.log(petName);





















