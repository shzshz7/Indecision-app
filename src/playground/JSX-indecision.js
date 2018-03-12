console.log('App.js is running. Hello');

//if statement
//ternary operators
//logical AND operator

// only render the subtitle (and p tag) if subtitle exist - logical AND operator
// render new p tag - if option.length > 0 "Here are your options" "No Option"




//oject title/subtitle
//user title/subtitle in the template
// render template

const app = {
    title: 'this is title',
    subtitle: 'this is subtitle',
    options: []
};


const onFormSubmit = (e) => {
    e.preventDefault();//to prevent default behavior

    const option = e.target.elements.option.value;//access to the input text

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        
        renderForm();
    }

    // console.log('form submitted');
};

//Challeng 2: removeAll button
const removeAll = () => {
    app.options = [];
    renderForm();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    // console.log(randomNum);
};

const appRoot = document.getElementById("app");

// const numbers = [55,101,1000];

const renderForm = () => {
    const template = (
        <div>
            <h1>{app.title.toLocaleUpperCase()}</h1>
            {app.subtitle && <h2>{app.subtitle}</h2>}
            <p>{app.options.length > 0 ? "Here are your options: " + app.options : "No option"}</p>
            {/* <p>{app.options.length}</p> */}
            <button disabled = {app.options.length === 0} onClick = {onMakeDecision}>What should I do?</button>
            <button onClick = {removeAll}>Remove All</button>
            {/* {
                numbers.map((number) => {
                    return <p key={number}>Number: {number}</p>
                })
            } */}
            <ol>
                {
                    app.options.map((item) => <li key={item}>{item}</li>)
                } 
            </ol>
            <form onSubmit = {onFormSubmit}>
                <input type = "text" name = "option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderForm();

// JSX--JavaScript XML
// const template = (
//     <div>
//         <h1>This is JSX from app</h1>
//         <p>This is some info</p>
        
//     </div>
// );

//Create a templateTwo var JSX expression
//div
//  h1 -> Harrison
// p -> Age:
// p -> Location:
// render templateTwo instead of template

// const user = {
//     name: 'Harrison',
//     age: 29,
//     location: 'Boston'
// }

// function getLocation(location) {
//     if(location){
//         return <p>Location: {location}</p>;
//     }else{
//         return undefined;
//     }
// }

// // var userName = 'Mike';
// // var userAge = 29;
// // var userLocation = 'Boston, MA';

// const templateTwo = (
//     <div>
//         <h1>{user.name? user.name:'Anonymous'}</h1>
//         {user.age >= 18 && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );

















