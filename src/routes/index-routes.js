const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    title: 'Testando API (Status OK)',
    version: '1.0.0'
  });
});

module.exports = router;