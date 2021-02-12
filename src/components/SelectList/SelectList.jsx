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

    const handleClose = () => {
        setAnchorEl(null);
        console.log('List selected for:', beerId);
    };

    const handleRemove = () => {
        console.log('Remove selected for:', beerId);
        handleClose();
        dispatch({ type: 'REMOVE_FROM_LIST', payload: beerId })
    };



    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Change List
      </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            // onClick={() => {handleSelect(beerId)}}

            >

                <MenuItem onClick={handleClose}>Favorites</MenuItem>
                <MenuItem onClick={handleClose}>Want To Try</MenuItem>
                <MenuItem onClick={handleClose}>Did Not Like</MenuItem>
                <MenuItem onClick={handleClose}>Would Drink Again</MenuItem>
                <MenuItem onClick={handleRemove}>Remove from List</MenuItem>
            </Menu>
        </div>
    );
}


