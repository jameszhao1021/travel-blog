import React from 'react';
import { useState } from 'react';
import './App.css'

import MyBlogPage from '../MyBlogPage/MyBlogPage';
import HomePage from '../HomePage/HomePage';
import GalleryPage from '../GalleryPage/GalleryPage'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import { getUser } from '../../utilities/users-service';
import BlogForm from '../../components/BlogForm';
import BlogDetailPage from '../BlogDetailPage/BlogDetailPage';
import GalleryForm from '../../components/GalleryForm';
import Footer from '../../components/Footer';
import CommunityPage from '../CommunityPage/CommunityPage';


function App() {

  const [user, setUser] = useState(getUser());
  const [blogs, setBlogs] = useState([]);
  const [galleries, setGalleries] = useState([]);

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
    <>
        <NavBar user={user} setUser={setUser} />
      {
        user ? (
          <>

            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/community' element={<CommunityPage />} />
              <Route path='/gallery' element={<GalleryPage uploadImage={uploadImage} user={user} galleries={galleries} setGalleries={setGalleries}/>} />
              <Route path='/gallery/new' element={<GalleryForm uploadImage={uploadImage} setGalleries={setGalleries} />} />
              <Route path='/myblog' element={<MyBlogPage uploadImage={uploadImage} user={user} blogs={blogs} setBlogs={setBlogs} />} />
              <Route path='/myblog/new' element={<BlogForm uploadImage={uploadImage} setBlogs={setBlogs} />} />
              <Route path='/blog/:blogId' element={<BlogDetailPage />} /> 
              
            </Routes>
          </>
        ) :
          (
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/community' element={<CommunityPage />} />
              <Route path='/gallery' element={<GalleryPage />} />
              <Route path='/blog/:blogId' element={<BlogDetailPage />} /> 
            </Routes>
          )
      }
      { /*<Footer />  */}
    </>
  )
}

export default App;

