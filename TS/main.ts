// main.ts
import { Movie } from './Movie';

// Simulate API call to fetch movie details by ID
const fetchMovieDetails = (id: number): Promise<Movie> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const mockMovieData = new Movie("Inception", "Christopher Nolan", 2010);
      resolve(mockMovieData);
    }, 2000);
  });
};

// Function to handle the movie and print details
const printMovieDetails = async (id: number): Promise<void> => {
  const movie = await fetchMovieDetails(id);

  // Destructure and use rest to extract properties
  const { title, ...rest } = movie;

  // Print formatted message
  console.log(`🎬 Movie: ${title}`);
  console.log(`📽️ Directed by: ${rest.director}`);
  console.log(`📅 Released in: ${rest.year}`);
};

// Example usage
const movieId: number = 1;
printMovieDetails(movieId);