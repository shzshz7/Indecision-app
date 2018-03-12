// import './utils.js';

// import subtract, { square, product } from './utils.js'

// console.log('app.js is running!!!!!!');
// console.log(square(5));
// console.log(product(5,6));
// console.log(subtract(100, 81));


//challenge
//person.js
//named export isAdult(18) -true if adult, otherwise false
//named export canDrink(21) - true is 21 and otherwise false

//import them 
//use both printing result to the console

// import isSenior, {isAdult, canDrink} from './person.js';

// console.log(isAdult(18));
// console.log(canDrink(18));
// console.log(canDrink(25));

// console.log(isSenior(65));  

//challenge 
//setting the default export functiion
//grab the default and call it

//install--import--use
// import validator from 'validator';

// console.log(validator.isEmail('test@gmail.com'));

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// const Layout = (props) => {//a stateless functional component
//     return (
//         <div>
//             <p>header</p>
//             {props.children}
//             {props.content}
//             <p>footer</p>
//         </div>
//     );
// }

// const template = (
//     <div>
//         <h1>Page Title</h1>
//         <p>This is my page</p>
//     </div>
// )

// ReactDOM.render(<Layout content={template}><p>This is inline</p></Layout>, document.getElementById('app'));



// class OldSyntax {
//     constructor(){
//         this.name = 'Mike';
//         this.getGreeting = this.getGreeting.bind(this);
//     }
//     getGreeting(){
//         return `Hi, My name is ${this.name}.`;
//     }
// }

// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());
// console.log(oldSyntax);

// ///----new syntax
// class NewSyntax {
//     name = 'Jen';
//     getGreeting = () => {
//         return `Hi, My name is ${this.name}.`;
//     }
// }
// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newSyntax);
// console.log(newGetGreeting());


// const template = <p>testing babel with webpack</p>;
// ReactDOM.render(template, document.getElementById('app'));

//One Component Per File

//moving the IndecisionApp
//setup import/export
//move the imports to that new files
//setup import here










//challenge
//Options -> options component
//AddOption -> form


//challenge
//setup options prop for Options component
//render the length of the array

//challenge
//render new p tag for each option (set text, set key)


// add removeAll button
//setup handleRemoveAll() -> alert some message
//setup onClick to fire the method



//challenge
//option -> options component here


//challenge
//setup form with text input and submit button
//onSubmit method
//handleAddOption -> fetch the value typed -> if value, then alert






