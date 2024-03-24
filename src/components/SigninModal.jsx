import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

const SigninModal = ({user, setUser, toggleModal, showModal}) => {
    const [showSignup, setShowSignup] = useState(true);
    function toggleShowSignup(){
        setShowSignup(prev=>!prev);
    }
    const handleLogout = () => {
        userService.logOut();
        setUser = nill;
    }

    return (

    <Modal centered show={showModal} >
    
    <Modal.Body>
        {showSignup?(
        //  <SignUpForm setUser={setUser} toggleModal={toggleModal}/>
         <SignUpForm setUser={setUser} toggleModal={toggleModal}/>
        ):(
           <LoginForm setUser={setUser} toggleModal={toggleModal}/>
        )}
       {showSignup?<p>Already have account?</p>:<p>Do not have account?</p>}
       <Button variant="secondary" onClick={toggleShowSignup} >
          {showSignup?'Log in your account':'Sign up a new Account'}
       </Button>
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