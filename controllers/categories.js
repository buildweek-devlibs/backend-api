const categories = require('../models/categories');

exports.all = async (req, res) => {
  try {
    const list = await categories.find();

    if (list.length > 0) {
      res.json({
        categories: list,
        success: true
      });
    } else {
      res.status(404).json({
        message: "No categories.",
        success: false
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: "Categories could not be retrieved.",
      success: false
    });
  }
};

exports.libs = async (req, res) => {
  const { id } = req.params;

  try {
    const libs = await categories.libs(id);

    if (libs.length > 0) {
      res.json({
        libs,
        success: true
      });
    } else {
      res.status(404).json({
        message: "No libs for this category.",
        success: false
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: "Category's libs could not be retrieved.",
      success: false
    });
  }
};

exports.new = async (req, res) => {
  let cat = req.body;
  const { approved, category } = cat;
  const length = Object.keys(cat).length;

  if (approved && approved !== false) {
    cat.approved = false;
  }
  
  if (!length) {
    res.status(400).json({
      message: "No info.",
      success: false
    });
  } else if (!category) {
    res.status(400).json({
      message: "No category field provided.",
      success: false
    });
  } else {
    try {
      cat = await categories.new(cat);

      if (cat) {
        res.status(201).json({
          category: cat,
          success: true
        });
      }
    } catch (error) {
      res.status(500).json({
        error,
        message: "Category could not be saved.",
        success: false
      });
    }
  }
};

exports.one = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await categories.findById(id);

    if (category) {
      res.json({
        category,
        success: true
      });
    } else {
      res.status(404).json({
        message: "Category does not exist.",
        success: false
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: "Category could not be retrieved.",
      success: false
    });
  }
};

exports.rm = async (req, res) => {
  const { id } = req.params;

  try {
    const removed = await categories.rm(id);

    if (removed) {
      res.json({
        message: "Category deleted.",
        success: true
      });
    } else {
      res.status(404).json({
        message: "Category does not exist.",
        success: false
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: "Category could not be removed.",
      success: false
    });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const length = Object.keys(updates).length;

  if (!length) {
    res.status(400).json({
      message: "No info.",
      success: false
    });
  } else {
    try {
      const category = await categories.update(id, updates);

      if (category) {
        res.json({
          category,
          success: true
        });
      } else {
        res.status(404).json({
          message: "Category does not exist.",
          success: false
        });
      }
    } catch (error) {
      res.status(500).json({
        error,
        message: "Category could not be modified.",
        success: false
      });
    }
  }
};