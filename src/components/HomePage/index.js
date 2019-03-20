import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar';
import CustomCard from '../CustomCard';
import { useStyles } from './style';

function HomePage() {

	const classes = useStyles();
	const [datos, setData] = useState(null);

	async function fetchMyAPI() {
		let url = 'https://api.themoviedb.org/3/discover/movie?api_key=ffc6639ca269adec1a663ec303bf1a1a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
		const response = await fetch(url);
		const data = await response.json();
		const item = data.results;
		setData(item);
	}

	useEffect(() => {
		fetchMyAPI();
	}, []);


	return (
		<div className={classes.body}>
			<NavBar></NavBar>
			<CustomCard></CustomCard>
			{datos && datos.map(movie=>(
				<CustomCard></CustomCard>
			))}			
		</div>
	)
}

export default HomePage;