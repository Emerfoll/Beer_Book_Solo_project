import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image from '../Beer-Icon/Beer-Icon.png'
import Modal from '../Modal/Modal';
import axios from 'axios';

import './BeerCard.css'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});




export default function BeerCard({ beer, cardClicked, addToList }) {

    const [listBeerIsIn, setListBeerIsIn] = useState(beer.list_name);

    const cardButtonClick = (event) => {

        console.log('more info button clicked', event);
    }

    const listSelected = (event) => {
        console.log('listSelected:', event);
        addToList(event, beer)
        setListBeerIsIn(event)
    }

    const classes = useStyles();

    // console.log(beer);

    return (
        <Card className={classes.root} >
            <CardActionArea onClick={() => { cardClicked(beer) }}>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title="beerCard"
                    value={beer.id}

                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {beer.beer_name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {beer.style}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {/* <Button
                    size="small"
                    color="primary"
                    value={beer.id}
                    beer={beer}
                    onClick={() => { cardButtonClick(beer) }}
                >
                    More Info
                </Button> */}

                <div className="listSelect">

                    <select
                        name="lists"
                        className="listSelector"
                        value={listBeerIsIn}
                        onChange={(event) => { listSelected(event.target.value, beer) }}
                    >
                        <option value="selectList">Select List</option>
                        <option value="want to try">Want To Try</option>
                        <option value="favorites">Favorites</option>
                        <option value="did not like">Did Not Like</option>
                        <option value="would drink again">Would Drink Again</option>
                        <option value="remove from list">Remove from List</option>
                    </select>

                </div>
            </CardActions>
        </Card>
    );
}


