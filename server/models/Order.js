import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  service: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
  requirement: { type: String },  // client ka extra note
  status: { 
    type: String, 
    enum: ["pending", "assigned", "delivered", "completed"], 
    default: "pending" 
  },
  amount: { type: Number, required: true },
  paymentStatus: { 
    type: String, 
    enum: ["unpaid", "paid"], 
    default: "unpaid" 
  },
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
