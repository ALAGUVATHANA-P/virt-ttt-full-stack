// Movie.ts
export class Movie {
  title: string;
  director: string;
  year: number;

  constructor(title: string, director: string, year: number) {
    this.title = title;
    this.director = director;
    this.year = year;
  }
}