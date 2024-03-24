import { Component } from "react";
import { signUp } from '../utilities/users-service';

class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    };


    handleSubmit = async (event) => {
      event.preventDefault();
      try {
          const formData = {...this.state};
          delete formData.error;
          delete formData.confirm;
          const user = await signUp(formData);
          this.props.setUser(user);
      } catch {
          this.setState({error: 'Sign Up Failed - Try Again'});
      }
  }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            error: ''
        });
    }
    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
          <div>
            <div className="form-container">
              <form autoComplete="off" onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                <label>Email</label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                <label>Confirm</label>
                <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                <button type="submit" disabled={disable} onClick={this.props.toggleModal}>Sign Up</button>
              </form>
            </div>
            <p className="error-message"> {this.state.error}</p>
          </div>
        );
    }
}
export default SignUpForm;

// import { useState } from 'react';
// import { signUp } from '../utilities/users-service';

// function SignUpForm({ setUser, toggleModal }) {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirm: '',
//         error: ''
//     });

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//           const formDataCopy = { ...formData };
//           delete formDataCopy.error;
//           delete formDataCopy.confirm;
//           const user = await signUp(formDataCopy);
//             setUser(user);
//         } catch {
//             setFormData({ ...formData, error: 'Sign Up Failed - Try Again' });
//         }
//     };

//     const handleChange = (event) => {
//         setFormData({
//             ...formData,
//             [event.target.name]: event.target.value,
//             error: ''
//         });
//     };

//     const disable = formData.password !== formData.confirm;

//     return (
//         <div>
//             <div className="form-container">
//                 <form autoComplete="off" onSubmit={()=>{handleSubmit(evt);toggleModal()}}>
//                     <label>Name</label>
//                     <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//                     <label>Email</label>
//                     <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//                     <label>Password</label>
//                     <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//                     <label>Confirm</label>
//                     <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
//                     <button type="submit" disabled={disable}>Sign Up</button>
//                 </form>
//             </div>
//             <p className="error-message"> {formData.error}</p>
//         </div>
//     );
// }

// export default SignUpForm;