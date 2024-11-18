import React from "react"

const TrailerTitleComponent = ({ title, description }) => {
	return (
		<div className="pt-40 px-12">
			<h1 className=" text-4xl font-bold my-2">{title}</h1>
			<p className=" text-lg w-1/4">{description}</p>
			<div className="mt-4">
				<button className="bg-white text-black p-2 px-16 border border-gray-400 mr-3 cursor-pointer text-md rounded-sm font-semibold bg-opacity-40  hover:bg-white hover:text-black hover:scale-105 active:scale-95 active:bg-[#0048d5] transition-all duration-200  ">
					▶️Play
				</button>
				<button className=" bg-gray-400 text-black p-2 px-16 border border-gray-400 cursor-pointer text-md  font-semibold rounded-sm  bg-opacity-40  hover:bg-white hover:text-black hover:scale-105 active:scale-95 active:bg-[#0048d5] transition-all duration-200 ">
					ℹ️ More info
				</button>
			</div>
		</div>
	)
}

export default TrailerTitleComponent
