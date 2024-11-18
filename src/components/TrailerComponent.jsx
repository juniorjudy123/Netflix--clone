import React, { useEffect } from "react"
import { API_options } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addTrailerVideo } from "../utils/slices/moviesSlice"

const TrailerComponent = ({ movieId }) => {
	const dispatch = useDispatch() //hooks on the top
	const trailer = useSelector((store) => store.movies?.trailerVideo)

	const getTrailerVideos = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/976573/videos?language=en-US",
			API_options
		)
		const json = await data.json()
		//filtering to get the trailer video
		const filteredData = json.results.filter((video) => video.type === "Teaser")
		const trailerVideo = filteredData.length ? filteredData[1] : json.results[0]
		dispatch(addTrailerVideo(trailerVideo))
	}
	useEffect(() => {
		getTrailerVideos()
	}, [])

	return (
		<div>
			<iframe
				width="560"
				height="315"
				src={"https://www.youtube.com/embed/" + trailer?.key}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			></iframe>
		</div>
	)
}

export default TrailerComponent
