import React from 'react';
import NavBar from "../components/NavBar/navbar";
import { Link } from 'react-router-dom';
import GoogleIcon from '../assets/google.png';

const Signin = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to Joblet
            </h2>
          </div>
          <form className="mt-8 space-y-6" method='POST'>
            <div className="rounded-md shadow-sm -space-y-px bg-gray-200 ">
              <div className="mb-2 p-3">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div className="mb-4 p-3">
                <input
                  id="Password"
                  name="Password"
                  type="text"
                  autoComplete="Password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>

              <div className="mb-4 p-3">
                <input
                  id="ConfirmPassword"
                  name="ConfirmPassword"
                  type="text"
                  autoComplete="ConfirmPassword"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="ConfirmPassword"
                />
              </div>

              
            </div>

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
                <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500 ">
                  Forgot password?
                </Link>
              </div>
            </div>

            <div>
              
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
               >
                Sign in
              </button>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-center">
                <Link to="/signup" className="font-medium mr-5 mb-2  text-indigo-600 hover:text-indigo-500">
                  Don't have an account? Sign up
                </Link>
              </div>
              <div className="flex items-center justify-center mt-2">
                <span className="text-sm mr-2">Or sign in with</span>
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
