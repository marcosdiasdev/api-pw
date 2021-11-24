const knex = require("../database/connection");

const findAll = async (req, res) => {
  const fabricantes = await knex("fabricantes");
  res.json(fabricantes);
};

const create = async (req, res) => {
  const result = await knex("fabricantes").insert(req.body);
  res.json(result);
};

const update = async function (req, res) {
  const result = await knex("fabricantes")
    .where({ id: req.params.id })
    .update(req.body);
  res.json(result);
};

const destroy = async (req, res) => {
  const result = await knex("fabricantes").where({ id: req.params.id }).del();
  res.json(result);
};

module.exports = { findAll, create, update, destroy };
