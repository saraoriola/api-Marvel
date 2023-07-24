document.addEventListener("DOMContentLoaded", () => {
    const loadMoviesBtn = document.getElementById("loadMoviesBtn");
    const moviesContainer = document.getElementById("moviesContainer");
  
    loadMoviesBtn.addEventListener("click", () => {

      axios.get("http://localhost:3001/movies")
        .then((response) => {

          const movies = response.data;
          const moviesList = document.createElement("ul");
  
          movies.forEach((movie) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${movie.title} - Directed by ${movie.director} (${movie.releaseYear}) - Genre: ${movie.genre} - Rating: ${movie.rating}`;
            moviesList.appendChild(listItem);
          });
  

          moviesContainer.innerHTML = "";
          moviesContainer.appendChild(moviesList);
        })
        .catch((error) => {
          console.error("Error fetching movies:", error);
        });
    });
  });
  