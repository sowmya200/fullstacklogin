import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export default function SignUpPage() {
  // State to store form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    checkbox: false,
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Use the type to determine whether to update value or checkbox
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    // Access the form data in the state
    try {
        // Make a POST request to an API endpoint with the form data
        const response = await fetch('AIzaSyAVrMCEBnmja15KEOXYZizAsn1PFPHgdZchttp:', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        // Check if the request was successful
        if (response.ok) {
          console.log('Form data submitted successfully');
          // Perform additional actions if needed
        } else {
          console.error('Failed to submit form data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
  };
  
    
    

    // console.log('Form Data:', formData);
    // Perform additional actions (e.g., API calls) here
  

  return (
    <div className="text-center m-5-auto">
      <h2>Join us</h2>
      <h5>Create your personal account</h5>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Username</label>
          <br />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </p>
        <p>
          <label>Email address</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </p>
        <p>
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </p>
        <p>
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            checked={formData.checkbox}
            onChange={handleInputChange}
            required
          />{' '}
          <span>
            I agree all statements in{' '}
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              terms of service
            </a>
            .
          </span>
        </p>
        <p>
          <button id="sub_btn" type="submit">
            Register
          </button>
        </p>
      </form>
      <footer>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
