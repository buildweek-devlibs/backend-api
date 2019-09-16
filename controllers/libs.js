const libs = require('../models/libs');

exports.all = async (req, res) => {
  try {
    const list = await libs.find();

    if (list.length > 0) {
      res.json({
        libs: list,
        success: true,
      });
    } else {
      res.status(404).json({
        message: 'No libs.',
        success: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: 'Libs could not be retrieved.',
      success: false,
    });
  }
};

exports.new = async (req, res) => {
  let nlib = req.body;
  const { approved, name, lib, category_id, user_id } = nlib;
  const length = Object.keys(nlib).length;

  if (approved && approved !== false) {
    nlib.approved = false;
  }

  if (!length) {
    res.status(400).json({
      message: 'No info.',
      success: false,
    });
  } else if (!name || !lib || !category_id || !user_id) {
    res.status(400).json({
      message: 'No name, lib, category_id or user_id.',
      success: false,
    });
  } else {
    try {
      nlib = await libs.new({
        approved: nlib.approved,
        name: nlib.name,
        lib: nlib.lib,
        category_id: nlib.category_id,
        user_id: nlib.user_id,
      });

      if (nlib) {
        res.status(201).json({
          lib: nlib,
          success: true,
        });
      }
    } catch (error) {
      res.status(500).json({
        error,
        message: 'Lib could not be saved.',
        success: false,
      });
    }
  }
};

exports.one = async (req, res) => {
  const { id } = req.params;

  try {
    const lib = await libs.findById(id);

    if (lib) {
      res.json({
        lib,
        success: true,
      });
    } else {
      res.status(404).json({
        message: 'Lib does not exist.',
        success: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: 'Lib could not be retrieved.',
      success: false,
    });
  }
};

exports.rm = async (req, res) => {
  const { id } = req.params;

  try {
    const removed = await libs.rm(id);

    if (removed) {
      res.json({
        message: 'Lib removed.',
        success: true,
      });
    } else {
      res.status(404).json({
        message: 'Lib does not exist.',
        success: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: 'Lib could not be removed.',
      success: true,
    });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const updates = req.body.update;
  const length = Object.keys(updates).length;

  if (!length) {
    res.status(400).json({
      message: 'No info.',
      success: false,
    });
  } else {
    try {
      const lib = await libs.update(id, updates);

      if (lib) {
        res.json({
          lib,
          success: true,
        });
      }
    } catch (error) {
      res.status(500).json({
        error,
        message: 'Lib could not be modified.',
        success: false,
      });
    }
  }
};

exports.words = async (req, res) => {
  const { id } = req.params;

  try {
    const words = await libs.words(id);

    if (words.length > 0) {
      res.json({
        success: true,
        words,
      });
    } else {
      res.status(404).json({
        message: 'No words for this lib.',
        success: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: "Lib's words could not be retrieved.",
      success: false,
    });
  }
};
