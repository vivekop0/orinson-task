const User = require("../models/user");

const signup = async (req, res) => {
  try {
    const { name, email, number, requirement, message } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "We Already get your response",
        success: false,
      });
    }

    // Create a new user
    const newUser = await User.create({
      name,
      email,
      number,
      requirement,
      message,
    });

    res.status(201).json({
      message: "Thank You For Your Message",
      userData: newUser,
      success: true,
    });
  } catch (err) {
    console.error(err);  // Log the error for debugging
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

module.exports = {
  signup,
};
