import React, { useEffect } from "react"
import { API_options } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/slices/moviesSlice"

const UseNowPlayingMovies = () => {
	const dispatch = useDispatch()
	const getNowPlayingMovies = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
			API_options
		)
		const json = await data.json()
		console.log(json.results)
		dispatch(addNowPlayingMovies(json.results))
	}

	useEffect(() => {
		getNowPlayingMovies()
	}, [])
	return <div>UseNowPlayingMovies</div>
}

export default UseNowPlayingMovies
