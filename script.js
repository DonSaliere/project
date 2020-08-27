'use strict'
let numberOfFilms;

function start() {

	do {
		numberOfFilms = +prompt('Сколько вы фильмов уже посмотрели?', '');
	} while (isNaN(numberOfFilms))
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

//for (let i = 0; i < 2; i++) {
//
//	const nameMovie = prompt('Один из последних просмотренных фильмов?', '');
//	const rateMovie = prompt('На сколько оцените его?', '');
//
//	if (nameMovie != null && rateMovie != null && nameMovie != '' && rateMovie != '' && nameMovie.length < 50) {
//		personalMovieDB.movies[nameMovie] = rateMovie;
//	} else {
//		i--;
//	}
//}

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {

		let nameMovie = '';
		let rateMovie = '';

		do {
			nameMovie = prompt('Один из последних просмотренных фильмов?', '');
			rateMovie = prompt('На сколько оцените его?', '');
		} while (nameMovie == null || rateMovie == null || nameMovie == '' || rateMovie == '' || nameMovie.length > 50)
		personalMovieDB.movies[nameMovie] = rateMovie;
	}
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		alert('просмотрено мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
		alert('вы класический зритель');
	} else if (personalMovieDB.count > 30) {
		alert('вы киноман');
	} else {
		alert('error');
	}
}

detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {

	let yourGenres = [];

	for (let i = 1; i < 4; i++) {
		yourGenres.push(prompt(`Ваш любимый жанр под номером ${i} ?`, ''));
	}
	personalMovieDB.genres.push(yourGenres);
}


writeYourGenres();

