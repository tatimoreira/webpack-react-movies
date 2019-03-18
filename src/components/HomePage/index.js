import React, { useState } from 'react';
import NavBar from '../NavBar';
import CustomCard from '../CustomCard';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './style';

function HomePage() {
	const classes = useStyles();
	/*const [data, setData] = useState({ topRatedMovies: [] });
	let topRated = data.topRatedMovies.filter(function (movie) {
		return movie.poster.path != null;
	}).map(function (movie) {
		return (
			<CustomCard data={movie}></CustomCard>
		);
	})*/

	return (
		<div className={classes.body}>
			<NavBar></NavBar>
			<CustomCard></CustomCard>
		</div>
	)
}

export default HomePage;