import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

const SigninModal = ({ setUser, toggleModal, showModal }) => {
    const [showSignup, setShowSignup] = useState(true);
    function toggleShowSignup() {
        setShowSignup(prev => !prev);
    }

    return (

        <Modal centered show={showModal} >
            <Modal.Body className='pt-1 pb-0'>
                {showSignup ? (
                    //  <SignUpForm setUser={setUser} toggleModal={toggleModal}/>
                    <SignUpForm setUser={setUser} toggleModal={toggleModal} toggleShowSignup={toggleShowSignup} />
                ) : (
                    <LoginForm setUser={setUser} toggleModal={toggleModal} toggleShowSignup={toggleShowSignup} />
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={toggleModal}>
                    Close
                </Button>
                {/* Add additional buttons or actions here */}
            </Modal.Footer>
        </Modal>
    );

}
export default SigninModal