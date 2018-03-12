import React from 'react';

export default class Option extends React.Component {//two problems: check button disable and check options array change and store the array
    //state={
    //    checkButtonClicked: false
    //};

    handleCheckOption = () => {
        //this.setState((prevState) => ({checkButtonClicked: !prevState.checkButtonClicked}));
        this.props.handleCheckOption(this.props.optionText);
        //console.log('button click status ' + this.state.checkButtonClicked);
    }

    handleDeleteOption = () => {
        this.props.handleDeleteOption(this.props.optionText)
    }
    
    render() {
        return(
            <div className='option'>
                <p className ='option__text'>
                    {this.props.count}. {this.props.optionText}
                </p>
                <div>
                    <button 
                        className='button--check'
                        onClick = {this.handleCheckOption}
                    >
                        {this.props.optionCheckStatus?'Checked':'Unchecked'}
                    </button>
                    <button
                        className='button--link'
                        onClick={this.handleDeleteOption}
                    >
                        remove
                        </button>
                </div>
            </div>
        )      
    }

}

