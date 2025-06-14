"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
const Movie_1 = require("./Movie");
// Simulate API call to fetch movie details by ID
const fetchMovieDetails = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const mockMovieData = new Movie_1.Movie("Inception", "Christopher Nolan", 2010);
            resolve(mockMovieData);
        }, 2000);
    });
};
// Function to handle the movie and print details
const printMovieDetails = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const movie = yield fetchMovieDetails(id);
    // Destructure and use rest to extract properties
    const { title } = movie, rest = __rest(movie, ["title"]);
    // Print formatted message
    console.log(`🎬 Movie: ${title}`);
    console.log(`📽️ Directed by: ${rest.director}`);
    console.log(`📅 Released in: ${rest.year}`);
});
// Example usage
const movieId = 1;
printMovieDetails(movieId);
