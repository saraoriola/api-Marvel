const Movie = require("../models/Movie");

const MovieController = {
  async createMovie(req, res) {
    try {
      req.body.completed = false;
      const movie = await Movie.create(req.body);
      res.status(201).send({ msg: "Movie created successfully", movie });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error creating the movie", error });
    }
  },
  async getAll(req, res) {
    try {
      const movies = await Movie.find();
      res.status(200).send({ msg: "Here are all the movies", movies });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error fetching all movies", error });
    }
  },
};

module.exports = MovieController;
