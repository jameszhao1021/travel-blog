import React from 'react';
import { useState } from 'react';
import './App.css'

import MyBlog from '../MyBlogPage/MyBlogPage';
import HomePage from '../HomePage/HomePage';
import Community from '../CommunityPage/CommunityPage';
import Gallery from '../GalleryPage/GalleryPage'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../compoments/NavBar';
import { getUser } from '../../utilities/users-service';


function App() {

  const [user, setUser] = useState(getUser());

  return (

    <div className='container container-fluid'>
      <>
        <NavBar user={user} setUser={setUser} />

      </>
      {
        user ? (
          <>

            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/community' element={<Community />} />
              <Route path='/gallery' element={<Gallery />} />
              <Route path='/myblog' element={<MyBlog />} />
            </Routes>
          </>
        ) :
          (
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/community' element={<Community />} />
              <Route path='/gallery' element={<Gallery />} />
            </Routes>
          )
      }
    </div>
  )
}

export default App;

