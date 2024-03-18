const carUsecase = require("../usecase/car");

exports.getAllCars = (req, res, next) => {
  const data = carUsecase.getAllCars();
  const response = {
    data,
    message: "All cars retrieved successfully",
  };

  res.status(200).json(response);
};

exports.getCar = (req, res, next) => {
  const { id } = req.params;
  const data = carUsecase.getCarById(id);

  if (!data) {
    return next({
      statusCode: 404,
      message: `Car with id ${id} is not found`,
    });
  }

  const response = {
    data: data,
    message: null,
  };

  res.status(200).json(response);
};

exports.addCar = (req, res, next) => {
  const data = carUsecase.addCar(req.body);
  res.status(201).json({
    data,
    message: "Car added successfully",
  });
};

exports.updateCar = (req, res, next) => {
  const id = req?.params?.id;

  const carToUpdate = carUsecase.getCarById(id);

  if (!carToUpdate) {
    return next({
      statusCode: 404,
      message: `Car with id ${id} is not found`,
    });
  }

  const updatedCar = {
    id: id,
    ...req.body,
  };
  const data = carUsecase.updateCar(id, updatedCar);

  res.status(200).json({
    data: data,
    message: "Car updated successfully",
  });
};

exports.deleteCar = (req, res, next) => {
  const id = req?.params?.id;

  const carToDelete = carUsecase.getCarById(id);

  if (!carToDelete) {
    return next({
      statusCode: 404,
      message: `Car with id ${id} is not found`,
    });
  }

  const data = carUsecase.deleteCar(id);

  res.status(200).json({
    data: data,
    message: "Car deleted successfully",
  });
};
