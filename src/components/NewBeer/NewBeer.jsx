import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {
    Grid,
    Toolbar,
    Typography,
    TextField
} from '@material-ui/core';
import './NewBeer.css'
import Modal from '../Modal/Modal';
import BeerCard from '../BeerCard/BeerCard';
import SearchBar from '../SearchBar/SearchBar';
import AppBar from '@material-ui/core/AppBar';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';


// const theme = createMuiTheme({
//     palette: {
//         primary: blue,
//         secondary: pink,
//       },
//   });

const useStyles = makeStyles(theme => ({
    beerContainer: {
        paddingTop: "20px",
        paddingLeft: "50px",
        paddingRight: "50px",
    },
    cardMedia: {
        margin: "auto",
    },
    cardContent: {
        textAlign: "center",
    },
    searchContainer: {
        display: 'flex',
        backgroundColor: fade(theme.palette.common.white, 0.15),
        paddingLeft: "20px",
        paddingRight: "20px",
        marginTop: "5px",
        marginBottom: "5px",
    },
    searchIcon: {
        alignSelf: "flex-end",
        marginBottom: "5px",
    },
    searchInput: {
        width: "200px",
        margin: "5px",
    }
}));

function NewBeer(params) {

    useEffect(() => {
        dispatch({ type: 'GET_BEER' });
    }, []);

    const classes = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();

    const beers = useSelector(store => store.beers);

    const [searchFor, setSearchFor] = useState('');
    const [modalContent, setModalContent] = useState('');

    // console.log(beers);
    const [isOpen, setIsOpen] = useState(false);

    const handleSearchChange = (event) => {
        setSearchFor(event.target.value)
    }


    const cardClicked = (beer) => {
        console.log('card clicked on newBeer page', beer);
        setIsOpen(true)

        setModalContent(beer)

        // history.push(`/beerDetails/${beer.id}`)
        dispatch({ type: 'BEER_LIST_DETAILS', payload: { beer: beer.id } })
    }


    const addToList = (event, beer) => {
        console.log('List selected:', event, 'For', beer);

        let list = 0
        switch (event) {
            case 'want to try':
                list = 1;
                break;
            case 'favorites':
                list = 2;
                break;
            case 'did not like':
                list = 3;
                break;
            case 'would drink again':
                list = 4;
                break;
        }

        axios.post(`api/beer/addToList/${beer.id}`, {
            beer: beer,
            event: list
        }).then(response => {
            console.log('add response:', response.data);
        }).catch(err => {
            console.log('add to list newBeer:', err);
        })
    }




    return (
        <>

            <AppBar position="static">
                <Toolbar>
                    <div className={classes.searchContainer} >
                        <SearchIcon className={classes.searchIcon} />
                        <TextField
                            onChange={handleSearchChange}
                            className={classes.searchInput}
                            label="Search Beer"
                            variant="standard"
                        />
                    </div>
                </Toolbar>
            </AppBar>

            {/* displays the details info of the beer clicked. */}
            <Modal
                className="modalPopup"
                open={isOpen}
                onClose={() => setIsOpen(false)}
                modalContent={modalContent}
            >
                <img src={modalContent.image} />
                <div>{modalContent.beer_name}</div>
                <div>{modalContent.abv}</div>
                <div>{modalContent.style}</div>
                <div>{modalContent.brewery}</div>

            </Modal>

            <br />
            {beers ? (
            <Grid container spacing={4} justify="center" className="beerCard">
                {beers.map(
                    (beer) => (
                    beer.beer_name.toString().toLowerCase().includes(searchFor) &&
                    <Grid item key={beer.id} className="beerCardItem" >
                        <BeerCard
                            key={beer.id}
                            beer={beer}
                            cardClicked={cardClicked}
                            addToList={addToList}
                        />
                    </Grid>
                ))}
            </Grid>) : Searching }
        </>
    )
}


export default NewBeer;






