import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
  developer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  status: { 
    type: String, 
    enum: ["in-progress", "delivered", "approved"], 
    default: "in-progress" 
  },
}, { timestamps: true });

export default mongoose.model("Assignment", assignmentSchema);
