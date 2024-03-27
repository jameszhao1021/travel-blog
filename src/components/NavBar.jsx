import React from 'react';
import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import SigninModal from '../components/SigninModal'
import * as userService from '../utilities/users-service';
import './NavBar.css';


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
      <Navbar className='navbar navbar-custom fixed-top justify-content-center' variant="light" expand="lg" style={{ backgroundColor: '#F6F2EF' }}>
        <div className=''>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="me-4">Home</Nav.Link>
            <Nav.Link href="/community" className="me-4">Community</Nav.Link>
            <Nav.Link href="/gallery" className="me-4">Gallery</Nav.Link>
            {
              user ? (
                <>
                  <Nav.Link href="/myblog" className="me-4">My Blog</Nav.Link>
                  <Nav.Link href="/" onClick={handleLogout} className="me-4">Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={toggleModal}>Sign in</Nav.Link>
              )
            }
          </Nav>
          <Nav className="nav-search-log">
            <form className="d-flex" role="search">
              <input className="form-control form-control-sm me-2" type="search" placeholder="Search the site.." aria-label="Search"/>
              <button className="btn btn-sm btn-outline-success button-custom" type="submit">Search</button>
            </form>
          </Nav>
          <Nav className="ms-4">
            {user && <span>Welcome, { user.name }</span>}
          </Nav>
        </Navbar.Collapse>
        </div>
        
      </Navbar>
      <SigninModal toggleModal={toggleModal} showModal={showModal} user={user} setUser={setUser}/>
    </>
    );
}
export default NavBar

