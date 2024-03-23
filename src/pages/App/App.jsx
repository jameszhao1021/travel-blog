import React from 'react';
import { useState } from 'react';
import './App.css'

import MyBlogPage from '../MyBlogPage/MyBlogPage';
import HomePage from '../HomePage/HomePage';
import Community from '../CommunityPage/CommunityPage';
import Gallery from '../GalleryPage/GalleryPage'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../compoments/NavBar';
import { getUser } from '../../utilities/users-service';


function App() {

  const [user, setUser] = useState(getUser());

  const uploadImage = async (image) => {
		const data = new FormData()
		data.append("file", image)
		data.append("upload_preset", "g6zmnwho")
		data.append("cloud_name", "dzpi33tak")
		return fetch("https://api.cloudinary.com/v1_1/dzpi33tak/image/upload",{
			method: "post",
			body: data
    		}).then(res => res.json())
      .catch(err => console.log(err))
	};

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
              <Route path='/myblog' element={<MyBlogPage uploadImage={uploadImage}/>} />
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

