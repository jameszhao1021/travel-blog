import React from 'react';
import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import SigninModal from '../compoments/SigninModal'
import * as userService from '../utilities/users-service';

const NavBar = ({user, setUser}) => {
    
const [showModal, setShowModal] = useState(false)
function toggleModal(){
    setShowModal(prev=>!prev)
}

    const handleLogout = () => {
        userService.logOut();
        setUser (null);
    }

    return (
        <>
        <Navbar className='px-3'bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/community">Community</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              {
                user ? (
                  <>
                    <Nav.Link href="/myblog">My Blog</Nav.Link>
                    <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                  </>
                ) : (
                  <Nav.Link onClick={toggleModal}>Sign in</Nav.Link>
                )
              }
            </Nav>
            <div className="ms-auto"> {/* Apply ms-auto class to this div */}
              {user && <span style={{color:'white'}}>Welcome, { user.name }</span>}
            </div>
          </Navbar.Collapse>
        </Navbar>
        <SigninModal toggleModal={toggleModal} showModal={showModal} user={user} setUser={setUser}/>
      </>
      );
}
export default NavBar

