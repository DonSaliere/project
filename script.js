'use strict'
const numberOfFilms = +prompt('Сколько вы фильмов уже посмотрели?', '');

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

for (let i = 0; i < 2; i++) {

	let nameMovie = '';
	let rateMovie = '';

	do {
		nameMovie = prompt('Один из последних просмотренных фильмов?', '');
		rateMovie = prompt('На сколько оцените его?', '');
	} while (nameMovie != null && rateMovie != null && nameMovie != '' && rateMovie != '' && nameMovie.length > 50)
	personalMovieDB.movies[nameMovie] = rateMovie;
}

if (personalMovieDB.count < 10) {
	alert('просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
	alert('вы класический зритель');
} else if (personalMovieDB.count > 30) {
	alert('вы киноман');
} else {
	alert('error');
}

console.log(personalMovieDB);
