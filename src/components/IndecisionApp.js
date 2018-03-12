import React from 'react';
import AddOptions from './AddOptions';
import Option from './Option';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

//pull the state out of the constructor
//convert all 4 event handlers to class properties (arrow function)
//delete the constructor completely
// start with the class properties and end with method

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    };
    handleCheckOption = (optionToCheck) => {
        //const ind = this.state.options.indexOf(optionToCheck);
        const obj = this.state.options.find(o => o.id === optionToCheck);
        //this.state.options[ind] = 'CHECKED ' + optionToCheck
        this.setState(() => ({
            options: this.state.options
        }));

        obj.isChecked = !obj.isChecked;
        //console.log('check button clicked: for ' + obj.id);
        //console.log('check button clicked: for options ' + JSON.stringify(this.state.options));
        //console.log('check button clicked: for ' + this.state.options);

        
        //console.log('check button clicked: for ' + this.state.buttonClicked);
    }
    handleDeleteOption = (optionToRemove) => {
        
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option.id !== optionToRemove)
        }));
        //console.log('remove button clicked');
    };
    //handleDeleteOptions

    //challenge
    //handlePick - pass down to Action and setup onClick- bind here
    //randomly pick an option and alert it
    handlePick = () => {
        const tempOptions = this.state.options.filter((option) => option.isChecked !== true);
        const randomNum = Math.floor(Math.random() * tempOptions.length);
        const option = tempOptions[randomNum];
        // alert(option);
        //console.log(tempOptions);
        // use setState to set selectedOption
        this.setState(() => ({ selectedOption: option }))
    };
    handleAddOption = (option) => {
        if (!option.id) {
            return 'Enter valid value to add item';
        } else if (this.state.options.find(x => x.id===option.id)) {
            return 'This option already exists';
        } else {
            //console.log(option);
            this.setState((prevState) => ({ options: prevState.options.concat(option) }));
        }
    };
    // constructor(props) {
    //     super(props);
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);

    // }
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
        //comment out the condition statement in order to store "CHECKED" to localStorage, since previously, options change will only be stored when options.length changes
        //if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            // console.log('saving data');
            // console.log('prevState: ' + prevState.options.length);
            // console.log('thisState: ' + this.state.options.length);
        //}

    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }


    render() {
        const title = 'IndecisionApp';
        const subtitle = 'Help you choose your action';

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className='container'>
                    <Action handlePick={this.handlePick}
                        hasOption={this.state.options.filter((option) => option.isChecked !== true).length > 0}
                    />
                    <div className='widget'>
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                            handleCheckOption={this.handleCheckOption}
                        />
                        <AddOptions
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    closeModal={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}

// IndecisionApp.defaultProps = {
//     options: []
// };

// export default IndecisionApp;