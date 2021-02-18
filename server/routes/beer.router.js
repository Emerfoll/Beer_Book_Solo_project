const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


// GET request to get all beers from the beer list. (newBeer page)
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


router.post('/addToList/:id', rejectUnauthenticated, (req, res) => {
  // Get what to post out of the req/res
  const beerToAdd = req.body.beer.id
  const listToAddTo = req.body.event
  const id = req.params.id
  const userId = req.user.id
  console.log(`User:${userId} - ${id}  beerToAdd: ${beerToAdd}, listToAddTo: ${listToAddTo}`);

  const queryText = `INSERT INTO "beer_lists" ("user_id", "beer_id", "list")
  VALUES ($1, $2, $3)
  RETURNING "id";`;

  pool.query(queryText, [userId, beerToAdd , listToAddTo])
    .then(result => {
      console.log('New beer entry ID:', result.rows[0]);

    }).catch(err => {
      console.log(err);
      res.sendStatus(500)
    })
  
});


// GET rout to get all beers to display on the userPage DOM. (from beerList.saga)
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

// post as a GET route to get what to display on the DOM. (from userPage)
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

// Get route to display beers the user has added.
router.get('/myList', rejectUnauthenticated, (req, res) => {
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

// Grabs the beer the user clicks on in the My Lists page
router.get('/userBeer/:id', (req, res) => {
  console.log(req.params);

  const queryText = `SELECT "beer_lists".id, "beer_name", "list_name", "brewery", "abv", "style", "notes" 
  FROM "beer_lists"
  JOIN "beers" ON "beers".id = "beer_lists".beer_id
  JOIN "name_of_beer_lists" ON "name_of_beer_lists".id = "beer_lists".list
  WHERE "beer_lists".id = ${req.params.id};`

  pool.query(queryText).then(result => {
    res.send(result.rows)
  }).catch(err => {
    console.log('Error in get userBeer router', err);
    res.sendStatus(500)
  })
})

// Update the notes section on the user beer details.
router.put('/userBeer/:id', rejectUnauthenticated, (req, res) => {
  console.log('Updating notes on userBeer');
  console.log(req.body.userNotes, req.params.id);

  let queryText = `UPDATE "beer_lists" SET "notes" = $2
                  WHERE "beer_lists".id = $1
                  RETURNING "beer_lists".id, "notes";`

  pool.query(queryText, [req.params.id, req.body.userNotes]
  ).then(results => {
    res.sendStatus(204)
  }).catch(err => {
    console.log(err);

  })
})



// post a new beer to the database in the my_beer table.
router.post('/', rejectUnauthenticated, (req, res) => {
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


router.delete('/:id', rejectUnauthenticated, (req, res) => {
  console.log('Removing from list', req.params.id);

  try {
    const sqlText = `
    DELETE FROM "beer_lists" WHERE "id" = $1;
    `;

    pool 
      .query(sqlText, [req.params.id])
      .then(() => res.sendStatus(204))

  } catch (error) {
    console.log(error);

  }
})

// put to update the list that the beer is on under the My List page.
router.put('/:id', rejectUnauthenticated, (req, res) => {
  console.log('Body:', req.body, 'Params:', req.params.id);

  try {
    let cat = req.body.event;
    console.log('cat:', cat);
    let sqlText = '';

    // if/else to set query text based on what list to display is sent
    if (cat === 'want to try') {
      sqlText = `UPDATE "beer_lists" SET "list" = 1
                  WHERE "beer_lists".id= $1
                  RETURNING "beer_lists".id, "user_id", "beer_id", "my_beer_id", "list", "notes";
                  `;
      console.log('adding to "want to try"');

    } else if (cat === 'favorites') {
      sqlText = `UPDATE "beer_lists" SET "list" = 2
                  WHERE "beer_lists".id= $1
                  RETURNING "beer_lists".id, "user_id", "beer_id", "my_beer_id", "list", "notes";
                  `;
      console.log('adding to "favorites"');

    } else if (cat === 'did not like') {
      sqlText = `UPDATE "beer_lists" SET "list" = 3
                  WHERE "beer_lists".id= $1
                  RETURNING "beer_lists".id, "user_id", "beer_id", "my_beer_id", "list", "notes";
                  `;
      console.log('adding to "did Not Like"');

    } else if (cat === 'would drink again') {
      sqlText = `UPDATE "beer_lists" SET "list" = 4
                  WHERE "beer_lists".id= $1
                  RETURNING "beer_lists".id, "user_id", "beer_id", "my_beer_id", "list", "notes";
                  `;
      console.log('adding to "would Drink Again"');

    }

    console.log('sending query');

    pool
      .query(sqlText, [req.params.id])
      .then(() => res.sendStatus(204))

  } catch (error) {
    console.log(error);

  }
})

module.exports = router;
