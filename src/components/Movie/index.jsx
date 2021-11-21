import React from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';


import movies from './../../movies.js';

const Movie = () => {
	const {id} = useParams();

	// replace with .find() !!
	const movie = movies[id - 1];

	// remove after debug !!
	console.log(movie);

	return (
		<>
			<div className="movie">
				<img src={`/assets/${movie.poster}`} alt={movie.title} />
				<div className="title"><h2>{movie.title}</h2></div>
				<div className="storyline"><p>{movie.storyline}</p></div>

				{/*
					Sem doplnit případně další detaily
				*/}
			</div>
			<Link to={'/'}>Zpět</Link> 
		</>
	)
}

export default Movie;