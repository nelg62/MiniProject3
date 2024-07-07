"use strict";

const Models = require("../models");

// Create a new user
const createUser = (req, res) => {
  Models.User.create(req.body)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Get a specific user by ID
const getUser = (req, res) => {
  Models.User.findAll({ where: { id: req.params.userid } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Get all users
const getUsers = (req, res) => {
  Models.User.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Update a specific user by ID
const updateUser = (req, res) => {
  Models.User.update(req.body, {
    where: { id: req.params.userid },
    returning: true,
  })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Delete a specific user by ID
const deleteUser = (req, res) => {
  Models.User.destroy({ where: { id: req.params.userid } })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
};
