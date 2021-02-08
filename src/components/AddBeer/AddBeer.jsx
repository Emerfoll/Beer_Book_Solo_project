import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './AddMovie.css'
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    IconButton,
    Menu,
    MenuItem,
    Typography,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from '@material-ui/core'


function AddMovie(params) {

    const dispatch = useDispatch();
    const history = useHistory();


    useEffect(() => {
        dispatch({ type: 'GET_GENRES_LIST' });
    }, []);

    const genres = useSelector(store => store.genres);

    const [movieTitle, setMovieTitle] = useState('');
    const [moviePoster, setMoviePoster] = useState('');
    const [movieDescription, setMovieDescription] = useState('');
    const [movieGenre, setMovieGenre] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    

    
    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        setAnchorEl(null);
        setMovieGenre(event.target.value);
        
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        if (movieTitle !== ''
            && moviePoster !== ''
            && movieDescription !== '') {
            const movieToAdd = {
                movieTitle,
                moviePoster,
                movieDescription,
                movieGenre
            }
            dispatch({ type: 'ADD_MOVIE', payload: movieToAdd })
            console.log('submitted', movieToAdd);
        }
        else (alert('Please fill out all fields'));
        setMovieTitle('');
        setMoviePoster('');
        setMovieDescription('');
        history.push('/');
    }

    const handleCancel = () => {
        console.log('Movie not added');
        history.push('/');
    }



    return (
        <>
            <h1>Add Movie</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <TextField id="titleIn" label="Movie Title" variant="outlined"

                        type="text"
                        value={movieTitle}
                        onChange={(event) => setMovieTitle(event.target.value)} />
                </div>
                <br></br>
                <div>
                    <TextField width={600} id="posterIn" label="Movie Poster URL" variant="outlined"
                        type="text"
                        value={moviePoster}
                        onChange={(event) => setMoviePoster(event.target.value)}
                    />
                </div>
                <br></br>
                <div>
                    <TextField
                        id="descriptionIn"
                        label="Movie Description"
                        multiline
                        rows={10}
                        variant="outlined"
                        value={movieDescription}
                        onChange={(event) => setMovieDescription(event.target.value)}
                    />
                    {/* <textarea
                        name="description"
                        id=""
                        cols="30" rows="10"
                        value={movieDescription}
                        onChange={(event) => setMovieDescription(event.target.value)}
                    ></textarea> */}
                </div>
                {/* <select
                    name="genre"
                    id="genre"
                    value={movieGenre}
                    onChange={(event) => setMovieGenre(event.target.value)}
                >
                    {genres.map((genre) => {
                        return (<option value={genre.id} key={genre.id}>{genre.id}-{genre.name}</option>)
                    })}
                </select> */}
                
                <span>Genre:</span><Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleOpenMenu}>
                {(movieGenre ? genres[movieGenre-1].name : 'Select' )}
                </Button>
                <Menu
                    value={movieGenre}
                    onChange={(event) => setMovieGenre(event.target.value)}
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {genres.map((genre) => {
                        return (<MenuItem
                            onClick={handleClose}
                            // onClick={(event) => setMovieGenre(event.target.value)}
                            value={genre.id}
                            key={genre.id}>{genre.name}</MenuItem>)
                    })}

                </Menu>
                <div>

                    <button className="cancelBtn" onClick={handleCancel}>Cancel</button>
                    <button className="submitBtn" onClick={handleSubmit}>Submit</button>
                </div>
            </form>

        </>
    )
}

export default AddBeer;