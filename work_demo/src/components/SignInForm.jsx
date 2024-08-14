import * as React from 'react';
import Home from '../components/Home';
import { docusDarkLogo } from "../assets";
import { GoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const clientId = "342662024476-dd9s96aij7rj7f46sbd86jq5c2rpldag.apps.googleusercontent.com";

function SignInForm(){
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
        const route = createBrowserRouter([
            {
              path: "/",
              element: <Home />
            },
          ]);
    }

    const onFailure = (res) => {
        console.log('[Login Failed] res:', res);
    }

    return (
        <div className='bg-gray-100 w-full h-screen flex-col items-center flex'>
            <div className='bg-white px-10 py-20 mt-10 my-10 border-2 rounded-3xl border-gray-200 w-[35%]'>
            {/* <img src={docusDarkLogo} alt="logo" className="mb-5 w=[124px] h-[40px] ml-[30%]"/> */}
            <h3 className="ml-[15%] mb-2 font-bold text-[50px] text-green">Visa Vanguard</h3>
            <h1 className='text-3xl font-medium text-center'>Welcome Back!</h1>
            {/* <p className='font-medium txt-lg text-gray-500 mt-4'>Welcome back! Please enter your details.</p> */}
            <div className='mt-8'>
                <div>
                    {/* <label className='text-lg font-medium'>Email</label> */}
                    <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1' type="text" placeholder='Enter your Email' />
                </div>
            </div>
            <div>
            <div>
                    {/* <label className='text-lg font-medium'>Password</label> */}
                    <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1' type="password" placeholder='Enter your Password' />
                </div>
                <div>
                    {/* <div className='mt-8 flex justify-between items-center'>
                        <input type="checkbox" id='remember'/>
                        <label className='ml-2 font-medium text-base' for='remember'>Remeber for 30 days</label>
                    </div> */}
                    <button className='font-medium text-base text-blue-500 ml-[70%]'>Forgot Password?</button>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='bg-blue-500 text-white text-lg font-bold py-3 rounded-xl active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out'>Sign In</button>
                    <div className='mt-8 flex justify-center item-center'>
                        <p className='font-medium text-base'>Don't have an account?</p>
                        <button className='text-blue-500 text-base font font-medium ml-2'>Sign up</button>
                    </div>
                    <div className='flex flex-row'>
                        <hr className='border: bg-dimWhite w-[45%] mt-3'/>
                        <p className='ml-2 mr-2'> OR </p>
                        <hr className='border: bg-dimWhite w-[45%] mt-3'/>
                    </div>
                    <GoogleLogin
                        clientId={clientId}
                        buttonText='Sign in with Google'
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        style={{marginTop: '100px'}}
                        isSignedIn={true}
                        className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out flex-border-2 border-gray-100 py-3 rounded-xl'
                    />
                </div> 
            </div>
        </div>
        </div>
    )
}

export default SignInForm;