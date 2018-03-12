import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        {/* <p>Options component here</p> */}
        {/* <p>This is number of all options: {this.props.options.length}</p> */}
        <div className='widget-header'>
            <h3 className='widget_header__h3'>Your Options</h3>
            <button
                className='button button--link'
                onClick={props.handleDeleteOptions}
            >
                Remove All
        </button>
        </div>
        {props.options.length === 0 && <p className='widget__message'>There is no item yet</p>}
        {
            props.options.map((option, index) => (
                <Option
                    key={option.id}
                    optionText={option.id}
                    optionCheckStatus={option.isChecked}
                    count={index+1}
                    handleDeleteOption={props.handleDeleteOption}
                    handleCheckOption={props.handleCheckOption}
                />
            ))
        }
    </div>
);

export default Options;