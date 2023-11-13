const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route    POST api/users
// @desc     Register User
// @access   public
router.post('/', [
  check('name', 'Name is required')
    .not()
    .isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check(
    'password', 'PLease enter a password with 6 or more characters'
  ).isLength({ min: 6 })
], (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.aray(), message: 'Validation failed' })
  }
  res.send('User route')
});

module.exports = router;

