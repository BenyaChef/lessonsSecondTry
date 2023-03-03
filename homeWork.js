"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};


// for (let i = 0; i <= 1; i++) {
// 	const a = prompt("Один из последних просмотреных фильмов?", "");
// 	const b = prompt("На сколько вы его оцените?", "");

	// if (a != null && b != null && a != "" & b != "" && a.length < 50) {
	// 	personalMovieDB.movies[a] = b;
	// 	console.log("done");
	// } else {
	// 	console.log("error");
	// 	i--;
	// }
// }

if (personalMovieDB.count < 10) {
	console.log("просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
	console.log("Вы киноман");
} else {
	console.log("Произошла ошибка!");
}


console.log(personalMovieDB);

let num = 0;

while (num < 2) {
	const a = prompt("Один из последних просмотреных фильмов?", "");
	const b = prompt("На сколько вы его оцените?", "");
	if (a != null && b != null && a != "" & b != "" && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log("done");
		num++;
	} else {
		console.log("error");
	}
}

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