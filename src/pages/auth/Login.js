import React from 'react';

export default function Login() {  
    return (
        <>
            <div className="w-full p-6 m-auto bg-white rounded-md  shadow-xl shadow-red-600/40 ring ring-2 ring-white-600 lg:max-w-xl">
            <div className="flex justify-center">
                <img 
                    alt=""
                    className="h-8 mr-3" 
                    src=""/>
            </div>
                <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Login form
                </h1>
                <form className="mt-4">
                    <div className="mb-2">
                        <label for="username" className="block text-sm font-semibold text-gray-800"
                        >Username
                        </label>
                        <input
                            type="username"
                            className="block w-full px-3 py-2 mt-2 text-white-700 bg-white border rounded-md focus:border-white-400 focus:ring-white-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>
                    <div className="mb-2">
                        <label for="password" className="block text-sm font-semibold text-gray-800"
                        >Password
                        </label>
                        <input type="password" className="block w-full px-4 py-2 mt-2 text-white-700 bg-white border rounded-md focus:border-white-400 focus:ring-white-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>
                    <a href="#" className="text-xs text-white-800 hover:underline">
                        Forget Password?
                    </a>
                    <div className="mt-6"> 
                        <a href='/home' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
                            Login
                        </a>
                    </div>
                </form>

                <p className="mt-8 text-xs font-bold text-center text-gray-700">
                    {" "}
                    Don't have an account? {""}
                    <a href="signup" className="font-medium text-white-600 hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
            </>
    );
}