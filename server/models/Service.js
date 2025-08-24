import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },   // e.g. Logo Design
  description: { type: String },
  price: { type: Number, required: true },
  deliveryTime: { type: Number, default: 3 }, // in days
}, { timestamps: true });

export default mongoose.model("Service", serviceSchema);
