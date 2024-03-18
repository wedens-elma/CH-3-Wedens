const carRepo = require("../../repository/car");

exports.getAllCars = () => {
  const data = carRepo.getAllCars();
  return data;
};

exports.getCarById = (id) => {
  const data = carRepo.getCarById(id);
  return data;
};

exports.addCar = (payload) => {
  const data = carRepo.addCar(payload);
  return data;
};

exports.updateCar = (id, payload) => {
  const data = carRepo.updateCar(id, payload);
  return data;
};

exports.deleteCar = (id) => {
  const data = carRepo.deleteCar(id);
  return data;
};
