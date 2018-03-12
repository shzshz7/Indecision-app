//challenge
//count- setup default props value to 0

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        const countNum = parseInt(localStorage.getItem('countNum'), 10);
        
        if(!isNaN(countNum)){
            this.setState(() => ({count: countNum}))
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count){
            localStorage.setItem('countNum', this.state.count);
            console.log('componentDidUpdate');
        }
    }
    handleAddOne() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));//simpler syntax
        // console.log(this.state.count);
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
        // console.log('Minus one');
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
        // console.log('Reset');
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

// Counter.defaultProps = {
//     count: 0
// };

//challenge
//create methods: handleAddOne, handleMinusOne, handleReset
//use the console.log to print the methos name
//wire up the onClick & bind the constructor



ReactDOM.render(<Counter />, document.getElementById('app'));



















// let count = 0;
// const addOne = () => {
//     count++;
//     // console.log('addOne', count);
//     renderCounter();
// };
// const minusOne = () => {
//     count--;
//     // console.log('minusOne');
//     renderCounter();
// };
// const reset = () => {
//     count = 0;
//     // console.log('reset');
//     renderCounter();
// };

// // console.log(templateTwo);

// // challenge
// // make button "-1" - setup minusOne function and register - log "minusOne"
// // make reset button "reset" - setup reset function - log reset


// const appRoot = document.getElementById("app");

// const renderCounter = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick = {addOne}>+1</button>
//             <button onClick = {minusOne}>-1</button>
//             <button onClick = {reset}>reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounter();