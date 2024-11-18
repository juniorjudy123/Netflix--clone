import React from "react"
import { useSelector } from "react-redux"
import TrailerTitleComponent from "./TrailerTitleComponent"
import TrailerComponent from "./TrailerComponent"

const HeroComponent = () => {
	const movies = useSelector((store) => store.movies?.nowPlayingMovies)

	if (!movies) return //early return

	const playingTrailer = movies[2]

	const { original_title, overview, id } = playingTrailer

	return (
		<div>
			<TrailerTitleComponent title={original_title} description={overview} />
			<TrailerComponent movieId={id} />
		</div>
	)
}

export default HeroComponent
