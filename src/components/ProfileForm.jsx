import React from 'react';

function ProfileForm({profile, setProfile, formRef, picture, setPicture, editProfile, setEditProfile, newProfile, setNewProfile}) {

    
    function handleChange(e) {
        if (e.target.name === 'picture') {
            // If the input is for the preview picture and a file is selected
            const selectedFile = e.target.files[0];
            setPicture(selectedFile); 
            setNewProfile({ ...newProfile, picture: selectedFile }); // Set the selected file in the newBlog state
        } else {
            // For other inputs, update the value in the newBlog state
            setNewProfile({ ...newProfile, [e.target.name]: e.target.value });
        }
    }


    return (
        <div className='row' >

            <form className='container d-flex flex-column' autoComplete="off" style={{ maxHeight: '250px', overflowY: 'hidden' }} ref={formRef}>

                <div className='col-lg-12 d-flex align-items-center gap-3'>

                </div>
                <div className=' d-flex align-items-center gap-3'>
                    <input type="file" name="picture" onChange={handleChange} />
                    <label>Upload profile piacture</label>
                </div>
                <textarea name="bio" id="text" rows='4' placeholder='Write your bio here' value={newProfile.bio} onChange={handleChange} required></textarea>
         
            </form>
        </div>
    );

}
export default ProfileForm