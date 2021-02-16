import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '../Modal/Modal';
import axios from 'axios';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});




export default function BeerCard({ beer, cardClicked, addToList }) {

    const cardButtonClick = (event) => {

        console.log('more info button clicked', event);
    }

    const classes = useStyles();

    // console.log(beer);

    return (
        <Card className={classes.root} >
            <CardActionArea onClick={() => { cardClicked(beer.id) }}>
                <CardMedia
                    className={classes.media}
                    image="public/images/Beer-Icon.png"
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
                <Button
                    size="small"
                    color="primary"
                    value={beer.id}
                    onClick={() => { cardButtonClick(beer) }}
                >
                    More Info
                </Button>

                <div>

                    <select
                        name="lists"
                        className="listSelector"
                        onChange={(event) => { addToList(event.target.value, beer) }}
                    >
                        <option value="selectList">Select List</option>
                        <option value="favorites">Favorites</option>
                        <option value="want to try">Want To Try</option>
                        <option value="did not like">Did Not Like</option>
                        <option value="would drink again">Would Drink Again</option>
                        <option value="remove from list">Remove from List</option>
                    </select>

                </div>
            </CardActions>
        </Card>
    );
}


