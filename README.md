<!DOCTYPE html>
<html>

<head>
  <title>Movie Viewer Web App</title>
</head>

<body>
  <h1>Movie Viewer Web App</h1>

  <h2>Overview</h2>
  <p>The Movie Viewer Web App is a simple web application that allows users to view a list of movies fetched from a
    MongoDB database. Users can click on a button to load the movies, and the app will make a request to the server to
    fetch the movie data and display it in a list on the frontend.</p>

  <h2>Features</h2>
  <ul>
    <li>Load Movies: Users can click on the "Load Movies" button to fetch and display the list of movies from the
      server.</li>
  </ul>

  <h2>Technologies Used</h2>
  <ul>
    <li>Node.js with Express.js for the backend server</li>
    <li>MongoDB for database storage</li>
    <li>Mongoose as the MongoDB object modeling tool</li>
    <li>Axios for making HTTP requests from the frontend</li>
    <li>HTML, CSS, and JavaScript for the frontend user interface</li>
  </ul>

  <h2>Setup</h2>
  <ol>
    <li>Clone the repository to your local machine.</li>
    <li>Install the required dependencies by running the following command in the root directory of the project:
      <pre><code>npm install</code></pre>
    </li>
    <li>Make sure you have MongoDB installed and running on your machine.</li>
    <li>Create a <code>.env</code> file in the root directory of the project and add the following configurations:
      <pre><code>PORT=3001
MONGO_URI=&lt;your_mongodb_connection_string&gt;</code></pre>
      Replace <code>&lt;your_mongodb_connection_string&gt;</code> with your actual MongoDB connection string.</li>
    <li>Start the server by running the following command:
      <pre><code>npm start</code></pre>
    </li>
    <li>Open a web browser and go to <code>http://localhost:3001</code> to access the Movie Viewer Web App.</li>
  </ol>

  <h2>Backend API Endpoints</h2>
  <ul>
    <li><code>GET /movies</code>: Fetches all movies from the database.</li>
  </ul>

  <h2>Frontend File Structure</h2>
  <ul>
    <li><code>index.html</code>: The main HTML file that displays the Movie Viewer Web App interface.</li>
    <li><code>public/css/style.css</code>: The CSS file that styles the web application.</li>
    <li><code>public/js/main.js</code>: The JavaScript file that handles the frontend logic, including making the API
      request and displaying the movie data.</li>
  </ul>

  <h2>Backend File Structure</h2>
  <ul>
    <li><code>index.js</code>: The entry point of the backend server, which sets up the server, connects to the database,
      and defines the API endpoints.</li>
    <li><code>config/config.js</code>: Configuration file that contains the database connection setup using Mongoose.</li>
    <li><code>models/Movie.js</code>: The Mongoose model for the "movies" collection in the database.</li>
    <li><code>routes/movies.js</code>: Defines the API endpoints related to movies and the corresponding controller
      functions to handle the requests.</li>
  </ul>

  <h2>Future Improvements</h2>
  <ul>
    <li>Add user authentication and user-specific movie lists.</li>
    <li>Implement search and filter functionality to search for specific movies or filter by genre, release year, etc.
    </li>
    <li>Add pagination for a better user experience when browsing through a large number of movies.</li>
  </ul>

  <h2>License</h2>
  <p>This project is licensed under the MIT License - see the <code>LICENSE</code> file for details.</p>

  <h2>Author</h2>
  <p><a href="https://github.com/yourusername">Your Name</a></p>

  <h2>Acknowledgments</h2>
  <p>Special thanks to <a href="https://openai.com">OpenAI</a> for providing the GPT-3.5 language model, which helped in
    generating this README file.</p>
</body>

</html>
