import Assignment from "../models/Assignment.js";

// Assign work to a developer
export const assignWork = async (req, res) => {
  try {
    const { order, developer } = req.body;

    const assignment = await Assignment.create({
      order,
      developer,
    });

    res.status(201).json(assignment);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get all assignments for a developer
export const getDeveloperAssignments = async (req, res) => {
  try {
    const { developerId } = req.params;
    const assignments = await Assignment.find({ developer: developerId })
      .populate("order")
      .populate("developer");
    res.json(assignments);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
