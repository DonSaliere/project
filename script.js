'use strict'

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: true,
	start: function () {

		do {
			personalMovieDB.count = +prompt('Сколько вы фильмов уже посмотрели?', '');
		} while (isNaN(personalMovieDB.count))
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {

			let nameMovie = '';
			let rateMovie = '';

			do {
				nameMovie = prompt('Один из последних просмотренных фильмов?', '');
				rateMovie = prompt('На сколько оцените его?', '');
			} while (nameMovie == null || rateMovie == null || nameMovie == '' || rateMovie == '' || nameMovie.length > 50)
			personalMovieDB.movies[nameMovie] = rateMovie;
		}
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			alert('просмотрено мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
			alert('вы класический зритель');
		} else if (personalMovieDB.count > 30) {
			alert('вы киноман');
		} else {
			alert('error');
		}
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	showMyDB: function () {
		if (!personalMovieDB.privat) {
			console.log(personalMovieDB);
		}
	},
	writeYourGenres: function () {

		for (let i = 1; i < 4; i++) {
			let gener = prompt(`Ваш любимый жанр под номером ${i} ?`, '');
			if (gener != null && gener != '') {
				personalMovieDB.genres.push(gener);
			} else {
				i--;
			}
		}
		personalMovieDB.genres.forEach(function (item, i) {
			console.log(`Любимый жанр #${i + 1} - это ${item}`);
		});

	}
};

personalMovieDB.start();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();

