const cars = require("../../data/cars.json");
const { v4: uuidv4 } = require("uuid");

exports.getAllCars = () => {
  let data = cars.map((car) => car);

  return data;
};

exports.getCarById = (id) => {
  let data = cars.map((car) => car);

  data = data.filter((car) => car.id == id);

  if (data.length == 0) {
    return null;
  }

  return data[0];
};

exports.addCar = (payload) => {
  const randomUUID = uuidv4();
  payload = {
    id: randomUUID,
    ...payload,
  };

  cars.push(payload);

  return payload;
};

exports.updateCar = (id, payload) => {
  let updatedCar = null;
  cars.forEach((car, index) => {
    if (car.id == id) {
      cars[index] = { ...car, ...payload };
      updatedCar = cars[index];
    }
  });
  return updatedCar;
};

exports.deleteCar = (id) => {
  index = cars.findIndex((car) => car.id === id);
  const deletedCar = cars[index];
  cars.splice(index, 1);

  return deletedCar;
};
