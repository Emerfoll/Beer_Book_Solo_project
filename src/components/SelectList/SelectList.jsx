import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux';


export default function SelectListMenu({ beerId }) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        setAnchorEl(null);
        console.log(event, 'List selected for:', beerId);
    };

    const handleRemove = () => {
        console.log('Remove selected for:', beerId);
        handleClose();
        dispatch({ type: 'REMOVE_FROM_LIST', payload: beerId })
    };

    const addToList = (event) => {
        console.log(event);
    }


    return (
        <div>


            <select
                name="lists"
                className="listSelector"
                onChange={(event) => { addToList(event.target.value) }}
            >
                <option value="selectList">Select List</option>
                <option value="favorites">Favorites</option>
                <option value="wantToTry">Want To Try</option>
                <option value="didNotLike">Did Not Like</option>
                <option value="wouldDrinkAgain">Would Drink Again</option>
                <option value="removeFromList">Remove from List</option>
            </select>


        </div>
    );
}


{/* 
    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Add to List
            </Button>
    
    
    <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                onChange={(event) => { addToList(event.target.value) }}

            >

                <MenuItem value="favorites" onClick={handleClose}>Favorites</MenuItem>
                <MenuItem onClick={handleClose}>Want To Try</MenuItem>
                <MenuItem onClick={handleClose}>Did Not Like</MenuItem>
                <MenuItem onClick={handleClose}>Would Drink Again</MenuItem>
                <MenuItem onClick={handleRemove}>Remove from List</MenuItem>
            </Menu> */}