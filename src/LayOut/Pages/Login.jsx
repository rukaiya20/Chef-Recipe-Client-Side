import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const [error,setError] = useState();
    const{signIn} =useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const From = location.state?.from?.pathname || '/'
    const handleLogin = event =>{
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password =from.password.value;
        console.log(email,password)
        signIn(email,password)
        .then(Result =>{
            const createUser = Result.user;
            console.log(createUser);
            navigate(From, {replace: true})
        })
        .catch(error =>{
            setError(error.message)
        })
        
    }
    return (
        <div>
            <div className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 Log in to your account
              </h1>
              <form onSubmit={handleLogin} className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="write your password" required/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="write your password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                      </div>
                      <Link className="text-sm font-medium text-primary-600 hover:underline dark:text-blue-500">Forgot password?</Link>
                  </div>
                  <p className='text-red-600 text-lg'>{error}</p>
                  <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                  <div className='text-white flex'>
                    <button className='border rounded py-3 me-2 flex'> <FcGoogle className='mt-0.5 w-5 h-5 ' /> Login with Google</button>
                    <button className='border rounded py-3 flex'> <BsGithub className='mt-0.5 w-5 h-5 '/> Login with GitHub</button>
                  </div>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <Link to='/register'><a href="#" className="font-medium text-primary-600 underline dark:text-blue-500">Register</a></Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</div>
        </div>
    );
};

export default Login;