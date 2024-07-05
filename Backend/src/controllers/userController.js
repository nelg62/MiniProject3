"use strict";

const Models = require("../models");

const createUser = (req, res) => {
  Models.User.create(req.body)
    .then((data) => {res.send({ result: 200, data: data }); })
    .catch((err) => {console.log(err); res.send({ result: 500, error: err.message }); });
};

const getUser = (req, res) => {
  Models.User.findAll({where: { id: req.params.userid },})
    .then((data) => {res.send({ result: 200, data: data }); })
    .catch((err) => {console.log(err); res.send({ result: 500, error: err.message }); });
};

const getUsers = (req, res) => {
  Models.User.findAll({})
    .then((data) => {res.send({ result: 200, data: data }); })
    .catch((err) => {console.log(err); res.send({ result: 500, error: err.message }); });
};

const updateUser = (req, res) => {
  Models.User.update(req.body, { where: { id: req.params.userid }, returning: true, })
    .then((data) => {res.send({ result: 200, data: data }); })
    .catch((err) => {console.log(err); res.send({ result: 500, error: err.message }); });
};

const deleteUser = (req, res) => {
  Models.User.destroy({ where: { id: req.params.userid }})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {console.log(err); res.send({ result: 500, error: err.message }); });
};

module.exports = {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
};
