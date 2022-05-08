const express = require('express');
const router = express.Router();

const DramaCalculator = require('../models/DramaCalculator.js');

// @route     POST /api/drama/calculator
// @desc      Register a Student on App
// @access    Public
router.post('/', async (req, res) => {
  try {
    const formInputParams = req.body;

    // Save User Form Submitted Data
    const dramaCalculatorData = await new DramaCalculator(formInputParams);

    await dramaCalculatorData.save();

    res.json({ msg: 'Form data saved successfully.' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Failed to Respond!' });
  }
});

module.exports = router;
