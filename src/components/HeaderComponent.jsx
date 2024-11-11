import React from "react"
import movieapplogo from "../assets/movieapplogo.jpg"

const HeaderComponent = () => {
	return (
		<div className=" absolute px-6 py-2 bg-gradient-to-b from-black z-10">
			<img
				src={movieapplogo}
				className="w-24 rounded-full p-2 mx-10  my-5 "
				alt="movieapp-logo"
			></img>
		</div>
	)
}

export default HeaderComponent
