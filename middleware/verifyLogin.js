const axios = require('axios');
const secrets = require('../config/secrets.js');

const verify = secrets.AUTH_URL;

module.exports = async (req, res, next) => {
  try {
    const isValid = await axios.post(verify, {
      session: req.body.session,
    });

    isValid
      ? next()
      : res.status(400).json({
          success: false,
          message: `Session no longer valid.`,
        });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: `Fatal Error.\n${err}`,
    });
  }
};
