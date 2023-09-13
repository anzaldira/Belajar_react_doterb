import React from 'react';

export default function SignUp() {
    return (
        <>
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl my-6 mx-auto md:px-10 pb-8">
            <div className="flex justify-center">
                <img 
                    alt=""
                    className="w-14 h-13"
                    src=""/>
            </div>
                <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign Up
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="username"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Username
                        </label>
                        <input
                            type="username"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label for="username" className="block text-sm font-semibold text-gray-800"
                        >Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>
                    <div className="mb-2">
                        <label for="username" className="block text-sm font-semibold text-gray-800"
                        >No HP
                        </label>
                        <input
                            type="nohp"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>
                    <div className="mb-2">
                        <label for="password" className="block text-sm font-semibold text-gray-800"
                        >Password
                        </label>
                        <input type="password" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>
                    <div className="mb-2">
                        <label for="password" className="block text-sm font-semibold text-gray-800"
                        >Confirm Password
                        </label>
                        <input type="password" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>
                    <div className="mt-6"> 
                        <a href='/home' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
                            Create Account
                        </a>
                    </div>
                </form>

                <p className="mt-8 text-xs font-bold text-center text-gray-700">
                    {" "}
                    Already have an account? {""}
                    <a href="/" className="font-medium text-purple-600 hover:underline">
                        Login
                    </a>
                </p>
            </div>
            </>
    );
}