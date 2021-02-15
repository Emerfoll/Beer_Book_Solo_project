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

router.get('/lists', (req, res) => {
  // GET route code here
  const queryText = `SELECT "beer_lists".id, "beer_name", "list_name", "brewery", "abv", "style" FROM "beer_lists"
  JOIN "beers" ON "beers".id = "beer_lists".beer_id
  JOIN "name_of_beer_lists" ON "name_of_beer_lists".id = "beer_lists".list;
  `;

  pool.query(queryText).then(result => {
    res.send(result.rows);
  }).catch(err => {
    console.log('Error in get router', err);
    res.sendStatus(500)
  })
});

router.post('/listToDisplay', (req, res) => {
  // GET route code here
  console.log('beer router listToDisplay:', req.body.listName);
  
  const queryText = `SELECT "beer_lists".id, "beer_name", "list_name", "brewery", "abv", "style" FROM "beer_lists"
  JOIN "beers" ON "beers".id = "beer_lists".beer_id
  JOIN "name_of_beer_lists" ON "name_of_beer_lists".id = "beer_lists".list
  WHERE "list_name" = '${req.body.listName}';
  `;

  pool.query(queryText).then(result => {
    res.send(result.rows);
  }).catch(err => {
    console.log('Error in get router', err);
    res.sendStatus(500)
  })
});


router.get('/myList', (req, res) => {
  // GET route code here
  const queryText = `SELECT * FROM "my_beers";
  `;

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


router.delete('/:id', (req, res) => {
  console.log('Removing from list');

  try {
    const sqlText = `
    DELETE FROM "beer_lists" WHERE "beer_id" = $1;
    `;

    pool
      .query(sqlText, [req.params.id])
      .then(() => res.sendStatus(204))

  } catch (error) {
    console.log(error);

  }
})

router.put('/:id', (req, res) => {
  console.log('req.body.event:', req.body.event);
  console.log('Body:', req.body, 'Params:', req.params.id);
  let cat = req.body.event;
  let list = 0;

  try {

    switch (cat) {
      case cat === 'wantToTry':
        list = 1
        console.log('want to try', list);
        return list;
      case cat === 'favorites':
        list = 2
        console.log('favorites', list);
        return list;
      case cat === 'didNotLike':
        list = 3
        console.log('did Not Like', list);
        return list;
      case cat === 'wouldDrinkAgain':
        list = 4
        console.log('would Drink Again', list);
        return list;

    }

    console.log('sending query');

    const sqlText = `
    UPDATE "beer_lists" 
    SET "list"=${cat} 
    FROM "name_of_beer_lists"
    WHERE "beer_lists".id= $1 AND ${cat} = "name_of_beer_lists"
    RETURNING "beer_lists".id, "user_id", "beer_id", "my_beer_id", "list", "notes";
    `;

    pool
      .query(sqlText, [req.params.id])
      .then(() => res.sendStatus(204))

  } catch (error) {
    console.log(error);

  }
})

module.exports = router;
