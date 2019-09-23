const express = require('express');
// const cors = require('cors');
const router = express.Router();
const mongo = require('../supDB/posts')


router.post('/default', (req, res) => {
    mongo.creatFirstPost((result) => {
      res.json(result);
    })
  });

router.get('/', (req, res) => {
    mongo.getAll( result => {
        res.json(result)
    })
});


module.exports = router;