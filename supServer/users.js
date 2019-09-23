const express = require('express');
const cors = require('cors');
const router = express.Router();
const mongo = require('../supDB/users')


router.post('/default', (req, res) => {
    mongo.insertFirstUser((result) => {
      res.json(result);
    })
  });

router.get('/', (req, res) => {
    mongo.getAll( result => {
        res.json(result)
    })
});


module.exports = router;