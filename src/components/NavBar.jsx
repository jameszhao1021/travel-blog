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
      <Navbar className='px-3 navbar-narrower navbar-custom'bg="dark" variant="dark" expand="lg">
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
         {/* TODO : nav-search-log class */}
         <div className="nav-search-log">
           <nav className="navbar bg-dark"> {/* Use bg-dark for a dark background */}
             <div className="container-fluid">
               <form className="d-flex" role="search">
                 <input className="form-control form-control-sm me-2 bg-dark text-white" type="search" placeholder="Search" aria-label="Search"/>
                 <button className="btn btn-sm btn-outline-success" type="submit">Search</button>
               </form>
             </div>
          </nav>
        </div>
        <div className="ms-auto"> 
            {user && <span style={{color:'white'}}>Welcome, { user.name }</span>}
          </div>
        </Navbar.Collapse>
      </Navbar>
      <SigninModal toggleModal={toggleModal} showModal={showModal} user={user} setUser={setUser}/>
    </>
    );
}
export default NavBar

