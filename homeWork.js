"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

	while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};



function rememberMyFilms () {
	for (let i = 0; i <= 1; i++) {
		const a = prompt("Один из последних просмотреных фильмов?", "").trim();
		const b = prompt("На сколько вы его оцените?", "");
	
		if (a != null && b != null && a != "" & b != "" && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log("done");
		} else {
			console.log("error");
			i--;
		}
	}
}

rememberMyFilms ();

function detectPersonalLevel () {
	if (personalMovieDB.count < 10) {
		console.log("просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log("Вы классический зритель");
	} else if (personalMovieDB.count > 30) {
		console.log("Вы киноман");
	} else {
		console.log("Произошла ошибка!");
	}
	
}

detectPersonalLevel ();

function showMyDB() {
	if (personalMovieDB.privat === true) {
		console.log("Data Base is lock!");
	} else {
		console.log(personalMovieDB);
	}
}

showMyDB();

function writeYourGeners() {
	for (let i = 1; i < 4; i++ ) {
		// const a = prompt(`Ваш любимый жанр под номером ${i}`);
		personalMovieDB.genres[i - 1] =  prompt(`Ваш любимый жанр под номером ${i}`);
	}
}

writeYourGeners();
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