import React, { useState, useRef, useEffect } from 'react';
import * as profilesAPI from '../utilities/profiles-api'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ProfileForm from './ProfileForm';


const ProfileFormModal = ({ user, profile, setProfile, toggleProfileModal, showProfileModal, uploadImage, editProfile, setEditProfile, newProfile, setNewProfile }) => {
    const [picture, setPicture] = useState(null);
    const formRef = useRef(null);
  
    // const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (editProfile) {
            setNewProfile({ ...editProfile });
            // setLoading(false);
        } else {
            setNewProfile(profile)
        }
    }, [editProfile]);

    function resetAfterClose() {
        setEditProfile(null);
        setPicture(null); // Reset the picture state
        setNewProfile(profile); 
    }

    async function handleSubmit(e) {
        e.preventDefault();
    
        // Check if a new picture is selected and it's different from the current picture
        if (picture) {
            const data = await uploadImage(newProfile.picture);
            newProfile.picture = data.url; // Update the submitted profile picture
        }else{
            setPicture('');
        }
        let submittedProfile = { ...newProfile };
        const editedProfile = await profilesAPI.updateProfile(user._id, submittedProfile);
        setProfile(editedProfile);
        toggleProfileModal();
    }
    return (
        <Modal centered show={showProfileModal} style={{ maxHeight: '100vh', overflowY: 'auto' }}>
            <Modal.Header>
                Edit your profile
            </Modal.Header>
            <Modal.Body style={{ maxHeight: '800px', overflowY: 'hidden' }}>
                <ProfileForm profile={profile} setProfile={setProfile} formRef={formRef} picture={picture} setPicture={setPicture} editProfile={editProfile} setEditProfile={setEditProfile} newProfile={newProfile} setNewProfile={setNewProfile} />
            </Modal.Body>
            <Modal.Footer >
                <Button variant="secondary" onClick={handleSubmit}>
                    Submit
                </Button>
                <Button variant="secondary" onClick={() => { toggleProfileModal(); resetAfterClose() }}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );

}
export default ProfileFormModal