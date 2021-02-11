import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SelectListMenu({ addToList }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Add to List
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>View All</MenuItem>
        <MenuItem onClick={handleClose}>Favorites</MenuItem>
        <MenuItem onClick={handleClose}>Want To Try</MenuItem>
        <MenuItem onClick={handleClose}>Did Not Like</MenuItem>
        <MenuItem onClick={handleClose}>Would Drink Again</MenuItem>
        <MenuItem onClick={handleClose}>Remove from List</MenuItem>
      </Menu>
    </div>
  );
}


