import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableMenuDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const history = useHistory();

  const MyListsClicked = () => {
    console.log('MyListsClicked');
    history.push('/user')
  }

  const addBeerClicked = () => {
    console.log('addBeerClicked');
    history.push('/addBeer')
  }

  const findNewBeerClicked = () => {
    console.log('findNewBeerClicked');
    history.push('/newBeer')
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key={'My Lists'} onClick={MyListsClicked}>
          <ListItemIcon> <AssignmentIcon /> </ListItemIcon>
          <ListItemText primary={'My Lists'} />
        </ListItem>
        <ListItem button key={'Add a Beer'} onClick={addBeerClicked}>
          <ListItemIcon> <AddIcon /> </ListItemIcon>
          <ListItemText primary={'Add a Beer'} />
        </ListItem>
        <ListItem button key={'Find a New Beer'} onClick={findNewBeerClicked}>
          <ListItemIcon> <SearchIcon /> </ListItemIcon>
          <ListItemText primary={'Find a New Beer'} />
        </ListItem>

        {/* {['My Lists', 'Add a Beer', 'Find a New Beer'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <AssignmentIcon /> : <AddIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </List>
      <Divider />
      <List>
        {['Logout'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <PeopleOutlineIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{<MenuIcon />}</Button>
          <SwipeableDrawer
            edge="start" // needed to make drawer swipeable
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}