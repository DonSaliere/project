//'use strict'
const numberOfFilms = +prompt('Сколько вы фильмов уже посмотрели?', '');



const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const nameMovie_1 = prompt('Один из последних просмотренных фильмов?', '');
const rateMovie_1 = prompt('На сколько оцените его?', '');

const nameMovie_2 = prompt('Один из последних просмотренных фильмов?', '');
const rateMovie_2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[nameMovie_1] = rateMovie_1;
personalMovieDB.movies[nameMovie_2] = rateMovie_2;


console.log(personalMovieDB);



