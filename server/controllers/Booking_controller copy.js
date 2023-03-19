const { Terrap } = require("../models/Terrap_model");

//METODO CREAR
module.exports.createTerrap = async (request, response) => {
  try {
    const terrap = await Terrap.create(request.body);
    response.json(terrap);
  } catch (error) {
    response.status(400);
    response.json(error);
  }
};
//METODO LISTAR TODOS
module.exports.getAllTerrap = async (request, response) => {
  try {
    const terraps = await Terrap.find();
    response.json(terraps);
  } catch (error) {
    response.status(400);
    response.json(error);
  }
};
//METODO CAPTAR POR EL ID
module.exports.getTerrap = async (request, response) => {
  try {
    const terrap = await Terrap.findOne({ _id: request.params.id });
    response.json(terrap);
  } catch (error) {
    response.status(400);
    response.json(error);
  }
};
//METODO ACTUALIZAR
module.exports.updateTerrap = async (request, response) => {
  try {
    const terrap = await Terrap.findOneAndUpdate(
      { _id: request.params.id },
      request.body,
      { new: true, runValidators: true }
    );
    response.json(terrap);
  } catch (error) {
    response.status(400);
    response.json(error);
  }
};
//METODO ELIMINAR
module.exports.deleteTerrap = async (request, response) => {
  try {
    const terrap = await Terrap.deleteOne({ _id: request.params.id });
    response.json(terrap);
  } catch (error) {
    response.status(400);
    response.json(error);
  }
};
