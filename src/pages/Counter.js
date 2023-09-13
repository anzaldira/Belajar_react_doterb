import React, { useState } from "react";	

const Counter = () => {
const [counter, setCounter] = useState(0)

const tambah = () => {
	setCounter(counter + 1)
}

const kurang = () => {
	setCounter(counter - 1)
} 


return (

	<div style={{
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '200%',
		position: 'center',
		width: '100%',
		height: '100%',
		top: '-15%',
		}}>

		<div className="w-full p-5 m-auto bg-white rounded-md shadow-xl shadow-white-600/40 ring ring-2 ring-white-600 lg:max-w-xl">
		<div className="mb-3 pt-0">
			<h3 className="text-center text-gray-800 font-bold text-s">Counter App</h3>
			</div>
			<br></br>
		<div className="mb-3 pt-0 text-center font-bold">
			{counter}
		</div>
		<br></br>
		<br></br>
		<div className="mb-3 pt-0 text-center">
		<button onClick={kurang} class="inline-block rounded-full bg-red-500 px-6 pb-2 pt-2.5 text-xs font-bold leading-center text-black-900 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
			Increment</button>
		<button onClick={tambah} class="inline-block rounded-full bg-green-500 px-6 pb-2 pt-2.5 text-xs font-bold  leading-center text-black-900 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
			Decrement</button>
			</div>
		</div>
	</div>
);

}

export default Counter
