import React, { useState } from 'react';
import NavBar from "../components/NavBar/navbar";
import { Link } from 'react-router-dom'; // Import useHistory
import GoogleIcon from '../assets/google.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios'; // Import Axios for making HTTP requests
const Signup = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to backend
      const response = await axios.post('/api/signup', formData);
      console.log(response.data); // Log the response from the backend

      // Redirect to the login page upon successful signup
           window.location.href = '/signin'; // Use window.location.href to redirect

    } catch (error) {
      console.error('Error:', error);
      // Handle error scenarios
    }
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-2xl">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-indigo-500">
              Create an account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px bg-gray-200">
              <div className="mb-1 p-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div className="mb-1 p-2">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div className="mb-1 p-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                  <span onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 flex items-center pr-3">
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
              <div className="mb-4 p-3">
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                                   Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirm-password"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="confirm-password"
                    required
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                  <span onClick={toggleConfirmPasswordVisibility} className="absolute inset-y-0 right-0 flex items-center pr-3">
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign up
              </button>
            </div>
          </form>

          <div className="text-sm text-center mt-4">
            <p className="font-bold text-md mr-5 mb-2  text-indigo-600 hover:text-indigo-500">Already have an account? <Link to="/signin" >Sign in</Link></p>
          </div>

          <div className="flex items-center justify-center mt-4">
            <div className="flex-grow border-b border-gray-300"></div>
            <span className="text-sm text-gray-500 mx-3 font-medium">Or</span>
            <div className="flex-grow border-b border-gray-300"></div>
          </div>
          <div className="flex items-center justify-center mt-2">
            {/* Google Sign-Up Button */}
            <button
              type="button"
              className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md bg-white hover:bg-gray-100"
            >
              <img className="w-4 h-4 mr-2 " src={GoogleIcon} alt="Google Icon" />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

