import Service from "../models/Service.js";

// Add a new service
export const addService = async (req, res) => {
  try {
    const { name, description, price, deliveryTime } = req.body;

    const service = await Service.create({
      name,
      description,
      price,
      deliveryTime,
    });

    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get all services
export const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
