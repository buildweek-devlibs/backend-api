const users = require('../models/users');

exports.one = async (req, res) => {
  const { id } = req.params;
  
  try {
    const user = await users.findById(id);

    if (user) {
      res.json({
        success: true,
        user
      });
    } else {
      res.status(404).json({
        message: "User does not exist.",
        success: false
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: "User could not be retrieved.",
      success: false
    });
  }
};

exports.libs = async (req, res) => {
  const { id } = req.params;

  try {
    const libs = await users.libs(id);

    if (libs.length > 0) {
      res.json({
        libs,
        success: true
      });
    } else {
      res.status(404).json({
        message: "No libs for this user.",
        success: false
      })
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: "User's libs could not be retrieved.",
      success: false
    });
  }
};

exports.new = async (req, res) => {
  let user = req.body;
  const { email, user_id } = user;
  const length = Object.keys(user).length;

  if (!length) {
    res.status(400).json({
      message: "No info.",
      success: false
    });
  } else if (!email || !user_id) {
    res.status(400).json({
      message: "No email or user_id.",
      success: false
    });
  } else {
    try {
      [ user ] = await users.new(user);

      if (user) {
        res.json({
          message: "User saved successfully.",
          success: true
        });
      }
    } catch (error) {
      res.status(500).json({
        error,
        message: "User could not be saved.",
        success: false
      });
    }
  }
};

exports.rm = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await users.findById(id);

    if (user) {
      const removed = await users.rm(id);

      if (removed) {
        res.json({
          message: "User deleted.",
          success: true
        });
      }
    } else {
      res.status(404).json({
        message: "User does not exist.",
        success: false
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: "User could not be removed.",
      success: false
    });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    let user = await users.findById(id);

    if (user) {
      user = await users.update(id, updates);

      if (user) {
        res.json({
          success: true,
          user
        });
      }
    } else {
      res.status(404).json({
        message: "User does not exist.",
        success: false
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: "User could not be modified.",
      success: false
    });
  }
};