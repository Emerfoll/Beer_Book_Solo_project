const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


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



router.post('/', (req, res) => {
  // POST route code here
  const beerToAdd = req.body
  console.log(beerToAdd);
  
  const queryText = `INSERT INTO "my_beers" ("beer_name", "style", "abv", "brewery")
  VALUES ($1, $2, $3, $4)
  RETURNING "id";`;

  pool.query(queryText, [beerToAdd.beer_name, 
                        beerToAdd.style,
                        beerToAdd.abv,
                        beerToAdd.brewery
                      ])
  .then(result => {
    console.log('New beer entry ID:', result.rows[0]);
    
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })

});

module.exports = router;
