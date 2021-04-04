import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { FindInPage, Flag } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function Profilenav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Friends" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Badges" icon={<Flag />} />
      <BottomNavigationAction label="CV" icon={<FindInPage />} />
    </BottomNavigation>
  );
}