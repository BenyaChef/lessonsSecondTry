"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

let lastWorchingFilmA = prompt("Один из последних просмотреных фильмов?", ""),
    lastWorchingFilmB = prompt("Один из последних просмотреных фильмов?", ""),
    gradeA = prompt("На сколько вы его оцените?", ""),
    gradeB = prompt("На сколько вы его оцените?", "");


    console.log(personalMovieDB);