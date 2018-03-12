import React from 'react';

export default class AddOptions extends React.Component {
    state = {//new syntax
        error: undefined
    }
    // constructor(props) {
    //     super(props);
    //     this.handleAddOption = this.handleAddOption.bind(this);   
    // }
    handleAddOption = (e) => {
        e.preventDefault();
        //console.log('testing');
        const option = {id:e.target.elements.option.value.trim(),ischecked:false};//add a second element for each option as check status

        const error = this.props.handleAddOption(option);
        //console.log('current option is ' + option);

        if (!error) {
            e.target.elements.option.value = '';
        }

        this.setState(() => ({ error }));
    };
    render() {
        return (
            <div>
                {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                <form className = 'add-option' onSubmit={this.handleAddOption}>
                    <input className='add-option__input' type='text' name='option' />
                    <button className='button'>Add Option Here</button>
                </form>
            </div>
        );
    }
}