import React, { useState } from 'react';
import NavBar from '../NavBar';
//import CustomCard from 

function HomePage() {

	/*const [data, setData] = useState({ topRatedMovies: [] });
	let topRated = data.topRatedMovies.filter(function (movie) {
		return movie.poster.path != null;
	}).map(function (movie) {
		return (
			<CustomCard data={movie}></CustomCard>
		);
	})*/

	return (
		<div>
			<NavBar></NavBar>
		</div>
	)
}

export default HomePage;