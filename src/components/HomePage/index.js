import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar';
import CustomCard from '../CustomCard';
import { useStyles } from './style';
import { Container, Row, Col } from 'react-bootstrap';

function HomePage() {

	const classes = useStyles();
	const [datos, setData] = useState(null);

	async function fetchMyAPI() {
		let url = 'https://api.themoviedb.org/3/discover/movie?api_key=ffc6639ca269adec1a663ec303bf1a1a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
		const response = await fetch(url);
		const data = await response.json();
		const item = data.results;
		debugger
		setData(item);
	}

	useEffect(() => {
		fetchMyAPI();
	}, []);
	const style = {
		display: 'flex',
		flexWrap: 'wrap'
	}

	return (
		<div className={classes.body}>
			<NavBar></NavBar>
			<div className={classes.container}>
				<p className={classes.title}>Top Rated Movies</p>
				<Container fluid={false}>
					<Row style={style}>
						{datos &&
							datos.map(movie => (
								<Col xs={6} sm={4} md={3} key={movie.id} >
									<CustomCard title={movie.original_title} overview={movie.overview} vote_average={movie.vote_average}
										release_date={movie.release_date} poster_path={movie.poster_path}></CustomCard>
								</Col>
							))}
					</Row>
				</Container>
			</div>
		</div>
	)
}

export default HomePage;