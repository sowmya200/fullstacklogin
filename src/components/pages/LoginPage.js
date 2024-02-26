import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';

export default function SignInPage() {
    const [formDataa, setFormData] = useState({
        usernameOrEmail: '',
        password: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('AIzaSyAVrMCEBnmja15KEOXYZizAsn1PFPHgdZchttp:', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataa),
          });
    
          if (response.ok) {
            console.log('Sign-in successful');

          } else {
            console.error('Sign-in failed');
            
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
    return (
        <form onSubmit={handleSubmit}>
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" 
                    name="first_name" 
                    onChange={handleInputChange}
                    required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" 
                    name="password" 
                    onChange={handleInputChange}
                    required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </form>
    )
}
