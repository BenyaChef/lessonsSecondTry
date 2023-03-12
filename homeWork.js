"use strict";

let numberOfFilms;

// function start() {
// 	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// 	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
// 		numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
// 	}
// }

// start();

const personalMovieDB = {
	start: function () {
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
	}
	},
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
					const a = prompt("Один из последних просмотреных фильмов?", "").trim(); // метод trim, орезает пробелы в конце и начале строки, можно использовать для проверки данных от пользователя на заполнение строки пробелами
					const b = prompt("На сколько вы его оцените?", "");
				
					if (a != null && b != null && a != "" & b != "" && a.length < 50) {
						personalMovieDB.movies[a] = b;
						console.log("done");
					} else {
						console.log("error");
						i--;
					}
				}
	},
	detectPersonalLevel: function() {
		if (personalMovieDB.count < 10) {
			console.log("просмотрено довольно мало фильмов");
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log("Вы классический зритель");
		} else if (personalMovieDB.count > 30) {
			console.log("Вы киноман");
		} else {
			console.log("Произошла ошибка!");
		}
	},
	showMyDB: function () {
		if (personalMovieDB.privat === true) {
			console.log("Data Base is lock!");
		} else {
			console.log(personalMovieDB);
		}
	},
	writeYourGeners: function () {
		for (let i = 1; i < 4; i++ ) {
			// const a = prompt(`Ваш любимый жанр под номером ${i}`);
			personalMovieDB.genres[i - 1] =  prompt(`Ваш любимый жанр под номером ${i}`);
		}
	}
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel ();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGeners();





// let num = 0;

// while (num < 2) {
// 	const a = prompt("Один из последних просмотреных фильмов?", "");
// 	const b = prompt("На сколько вы его оцените?", "");
// 	if (a != null && b != null && a != "" & b != "" && a.length < 50) {
// 		personalMovieDB.movies[a] = b;
// 		console.log("done");
// 		num++;
// 	} else {
// 		console.log("error");
// 	}
// }

// do {
// 	const a = prompt("Один из последних просмотреных фильмов?", "");
//  	const b = prompt("На сколько вы его оцените?", "");

// 	if (a != null && b != null && a != "" & b != "" && a.length < 50) {
// 		personalMovieDB.movies[a] = b;
// 		console.log("done");
// 		num++;
// 	} else {
// 		console.log("error");
// 	}
// }
// while(num < 2);
