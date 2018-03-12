// stateless functional component

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }
    componentDidMount() {
        try {
            const options = JSON.parse(localStorage.getItem('options'));

            if (options) {
                this.setState(() => ({ options }));//shorthand syntax
            }
            
            console.log('fetching data');

        } catch (e) {
            //do nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            // console.log('saving data');
            // console.log('prevState: ' + prevState.options.length);
            // console.log('thisState: ' + this.state.options.length);
        }

    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
    //handleDeleteOptions

    //challenge
    //handlePick - pass down to Action and setup onClick- bind here
    //randomly pick an option and alert it
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        } else {
            // console.log(option);
            this.setState((prevState) => ({ options: prevState.options.concat(option) }));
        }
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action handlePick={this.handlePick}
                    hasOption={this.state.options.length > 0}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOptions
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

// IndecisionApp.defaultProps = {
//     options: []
// };

const Header = (props) => {
    // console.log(this.subtitleVisible);
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOption}
            >
                What should I do?
            </button>
        </div>
    );
};


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

const Options = (props) => {
    return (
        <div>
            {/* <p>Options component here</p> */}
            {/* <p>This is number of all options: {this.props.options.length}</p> */}
            {props.options.length === 0&&<p>There is no item yet</p>}
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
};

//challenge
//option -> options component here
const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {//actually passing this e is not necessary, not like the handleAddOption
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </div>
    );
};

//challenge
//setup form with text input and submit button
//onSubmit method
//handleAddOption -> fetch the value typed -> if value, then alert

class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        const error = this.props.handleAddOption(option);

        if(!error){
            e.target.elements.option.value = '';
        }

        this.setState(() => ({ error }));
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option' />
                    <button>Add Option Here</button>
                    <p>{this.state.error}</p>
                </form>

            </div>
        );
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


