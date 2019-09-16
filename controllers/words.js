const words = require('../models/words');

exports.one = async (req, res) => {
  const { id } = req.params;

  try {
    const word = await words.findById(id);

    if (word) {
      res.json({
        success: true,
        word,
      });
    } else {
      res.status(404).json({
        message: 'Word does not exist.',
        success: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: 'Word could not be retrieved.',
      success: false,
    });
  }
};

exports.new = async (req, res) => {
  let word = req.body;
  const { lib_id, type } = word;
  const length = Object.keys(word).length;

  if (!length) {
    res.status(400).json({
      message: 'No info.',
      success: false,
    });
  } else if (!lib_id || !type) {
    res.status(400).json({
      message: 'No lib_id or type.',
      success: false,
    });
  } else {
    try {
      word = await words.new({
        lib_id: word.lib_id,
        type: word.type,
      });

      if (word) {
        res.status(201).json({
          success: true,
          word,
        });
      }
    } catch (error) {
      res.status(500).json({
        error,
        message: 'Word could not be saved.',
        success: false,
      });
    }
  }
};

exports.rm = async (req, res) => {
  const { id } = req.params;

  try {
    const removed = await words.rm(id);

    if (removed) {
      res.json({
        messaged: 'Word removed.',
        success: true,
      });
    } else {
      res.status(404).json({
        message: 'Word does not exist.',
        success: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: 'Word could not be removed.',
      success: false,
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
      const word = await words.update(id, updates);

      if (word) {
        res.json({
          success: true,
          word,
        });
      } else {
        res.status(404).json({
          message: 'Word does not exist.',
          success: false,
        });
      }
    } catch (error) {
      res.status(500).json({
        error,
        message: 'Word could not be modified.',
        success: false,
      });
    }
  }
};
