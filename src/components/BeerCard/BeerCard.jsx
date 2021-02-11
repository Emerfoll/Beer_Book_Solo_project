import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SelectList from '../SelectList/SelectList';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});


const cardButtonClick = (event) => {
    
    console.log('more info button clicked', event);
}

const addToList = (event) => {
    console.log('add to list button clicked', event);
}

export default function BeerCard( { beerName, beerStyle, cardClicked, beerId } ) {
    
    const classes = useStyles();
    
    // console.log(beerName);

    return (
        <Card className={classes.root} >
            <CardActionArea onClick={cardClicked}>
                <CardMedia
                className={classes.media}
                image="public/images/Beer-Icon.png"
                title="beerCard"
                    
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {beerName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {beerStyle}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button 
                size="small"
                color="primary"
                value={beerId}
                onClick={() => {cardButtonClick(beerId)}}
                >
                    More Info
                </Button>
                
                <SelectList 
                addToList={addToList}
                />
            </CardActions>
        </Card>
    );
}


