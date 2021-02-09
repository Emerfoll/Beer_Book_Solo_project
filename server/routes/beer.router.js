const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const queryText = `SELECT * FROM beers;`;

  pool.query(queryText).then(result => {
    res.send(result.rows);
  }).catch(err => {
    console.log('Error in get router', err);
    res.sendStatus(500)
  })

});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
