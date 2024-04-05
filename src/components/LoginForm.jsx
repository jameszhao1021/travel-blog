import { useState } from 'react';
import * as usersService from '../utilities/users-service';

export default function LoginForm({ setUser, toggleModal, toggleShowSignup }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }
  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // Attempt to log in with provided credentials
      const user = await usersService.login(credentials);
      // If login is successful, set the user state
      setUser(user);
      // Close the modal
      toggleModal();
    } catch (err) {
      // If an error occurs during login, display an error message
      console.error(err);
      setError('Invalid email or password. Please try again.');
    }
  }

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit" >Log In</button>
          <p className='switchText'>Do not have account?</p>
          <button className='switchButton' onClick={toggleShowSignup} >
            Sign up a new account
          </button>      
        </form>
      </div>
      {error && <p className="error-message">&nbsp;{error}</p>}

    </div>
  );
}

