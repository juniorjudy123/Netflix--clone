import HeaderComponent from "../components/HeaderComponent"
import HeroComponent from "../components/HeroComponent"
import UseNowPlayingMovies from "../customHooks/UseNowPlayingMovies"

const MainPage = () => {
	UseNowPlayingMovies()

	return (
		<div>
			<HeaderComponent />
			<HeroComponent />
		</div>
	)
}

export default MainPage
