import React from "react"
import { useSelector } from "react-redux"

const HeroComponent = () => {
	const movies = useSelector((store) => store.movies?.nowPlayingMovies)

	const playingTrailer = movies ? movies[0] : null
	const { original_title, overview } = playingTrailer

	return (
		<div className="pt-40 px-12">
			<h1 className=" text-4xl font-bold my-2">{original_title}</h1>
			<p className=" text-lg w-2/4">{overview}</p>
			<div className="mt-4">
				<button className="bg-white text-black p-2 px-16 border border-gray-400 mr-3 cursor-pointer">
					▶️play
				</button>
				<button className=" bg-gray-400 text-black p-2 px-16 border border-gray-400 cursor-pointer ">
					ℹ️ More info
				</button>
			</div>
		</div>
	)
}

export default HeroComponent
