import Order from "../models/Order.js";

// Create new order
export const createOrder = async (req, res) => {
  try {
    const { client, service, requirement, amount } = req.body;

    const order = await Order.create({
      client,
      service,
      requirement,
      amount,
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get all orders for a client
export const getClientOrders = async (req, res) => {
  try {
    const { clientId } = req.params;
    const orders = await Order.find({ client: clientId }).populate("service");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
