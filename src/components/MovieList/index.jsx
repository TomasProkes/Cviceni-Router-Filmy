import React from 'react';
import {
	Link,
  } from 'react-router-dom';
  
import movies from './../../movies.js';

const MovieList = () => {
	return (
		<>
			<h1>Movies</h1>
			<nav className="movie-list">
				{
					movies.map((movie) => (
						<Link key={movie.id} to={`/movies/${movie.id}`}>{movie.title}</Link>
					))
				}
			</nav>
		</>
	)
}

export default MovieList;