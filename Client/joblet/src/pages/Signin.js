import React, { useState } from 'react';
import NavBar from "../components/NavBar/navbar";
import { Link } from 'react-router-dom';
import GoogleIcon from '../assets/google.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';

const Signin = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', formData);
      console.log(response.data);

      // Redirect to dashboard upon successful login
           window.location.href = '/'; // Use window.location.href to redirect
      
    } catch (error) {
      console.error('Error:', error.response.data);
      setError(error.response.data.message); // Set error message from the backend
    }
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-beige-400 p-8 rounded-lg shadow-2xl ">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-indigo-500">
              Sign in to Joblet
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {/* Username */}
            <div className="rounded-md shadow-sm -space-y-px bg-gray-200">
              <div className="mb-2 p-3">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              {/* Password */}
              <div className="mb-4 p-3 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm pr-10"
                  placeholder="Password"
                />
                <span className="absolute inset-y-0 right-0 mr-4 pr-3 flex items-center">
                  {showPassword ? <FaEyeSlash onClick={togglePasswordVisibility} /> : <FaEye onClick={togglePasswordVisibility} />}
                </span>
              </div>
            </div>

            {/* Error message */}
            {error && (
              <div className="text-red-500 text-sm text-center mb-4">
                {error}
              </div>
            )}

            {/* Remember me and Forgot password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </Link>
              </div>
            </div>

            {/* Sign in button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>

            {/* Sign up and Google Sign-In */}
            <div className="mt-4">
              <div className="flex items-center justify-center">
                <Link to="/signup" className="font-medium mr-5 text-indigo-600 hover:text-indigo-500">
                  Don't have an account? Sign up
                </Link>
              </div>
              <div className="flex items-center justify-center mt-2">
                <div className="flex-grow border-b border-gray-300"></div>
                <span className="text-sm text-gray-500 mx-3">Or</span>
                <div className="flex-grow border-b border-gray-300"></div>
              </div>
              <div className="flex items-center justify-center mt-2">
                {/* Google Sign-In Button */}
                <button
                  type="button"
                  className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md bg-white hover:bg-gray-100"
                >
                  <img className="w-4 h-4 mr-2" src={GoogleIcon} alt="Google Icon" />
                  Sign in with Google
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
