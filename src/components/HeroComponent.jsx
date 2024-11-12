import React from "react"
import { useSelector } from "react-redux"

const HeroComponent = () => {
	const movies = useSelector((store) => store.movies?.nowPlayingMovies)

	const playingTrailer = movies ? movies[0] : null
	const { original_title, overview } = playingTrailer

	return <div></div>
}

export default HeroComponent
