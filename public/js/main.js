document.addEventListener("DOMContentLoaded", () => {
    const loadMoviesBtn = document.getElementById("loadMoviesBtn");
    const moviesContainer = document.getElementById("moviesContainer");
  
    loadMoviesBtn.addEventListener("click", () => {
      // Perform a GET request using Axios
      axios.get("http://localhost:3001/movies")
        .then((response) => {
          // Process the response and display the data in the container
          const movies = response.data;
          const moviesList = document.createElement("ul");
  
          movies.forEach((movie) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${movie.title} - Directed by ${movie.director} (${movie.releaseYear}) - Genre: ${movie.genre} - Rating: ${movie.rating}`;
            moviesList.appendChild(listItem);
          });
  
          // Clear the container before adding the updated list
          moviesContainer.innerHTML = "";
          moviesContainer.appendChild(moviesList);
        })
        .catch((error) => {
          console.error("Error fetching movies:", error);
        });
    });
  });
  