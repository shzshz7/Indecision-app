import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) =>  (
        <Modal
            isOpen = {!!props.selectedOption}
            onRequestClose = {props.closeModal}
            contenLabel="Selected Option"
            ariaHideApp={false}
            closeTimeoutMS={200}
            className='modal'
        >
            <h3 className = 'modal__title'>Selected Option</h3>
            {props.selectedOption&&<p className = 'modal__body'>{props.selectedOption.id}</p>}
            <button className = 'button' onClick = {props.closeModal}>close</button>
        </Modal>
    );

export default OptionModal;

//challenge
//create a new event handler in IndecisionApp that clears selectedOption state
//pass that into OptionModal
//call it on button click