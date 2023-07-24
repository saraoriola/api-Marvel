const Task = require("../models/Movies");

const MovieController = {
  async create(req, res) {
    try {
      req.body.completed = false;
      const task = await Task.create(req.body);
      res.status(201).send({ msg: "Pelicula creada con exito", task });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error al crear la película", error });
    }
  }
} 

module.exports = MovieController;