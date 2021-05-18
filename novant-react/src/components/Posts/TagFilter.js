import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
  Divider,
} from '@material-ui/core';
import {
  makeStyles,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import React, { useState } from 'react';
import InputBase from '@material-ui/core/InputBase';
import Chip from '@material-ui/core/Chip';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1877F2',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  myContainer: {
    borderBottomRightRadius: '15px',
    borderBottomLeftRadius: '15px',
  },
  input: {
    paddingLeft: '15px',
    paddingRight: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '15px',
    marginBottom: '15px',
    width: '50%',
    backgroundColor: '#F0F2F5',
    borderRadius: '10px',
    float: 'center',
    justifyContent: 'center',
  },
  filter: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFF',
    borderBottomRightRadius: '15px',
    borderBottomLeftRadius: '15px',
  },
  chips: {
    justifyItems: 'center',
    marginTop: '15px',
    marginBottom: '15px',
    marginLeft: '15px',
  },
  chip: {
    marginRight: '5px',
  },
}));

const TagsInput = (props) => {
  const classes = useStyles();
  const [tags, setTags] = React.useState(props.tags);
  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };
  const addTags = (event) => {
    if (event.target.value !== '') {
      setTags([...tags, event.target.value.toUpperCase()]);
      props.selectedTags([...tags, event.target.value.toUpperCase()]);
      event.target.value = '';
    }
  };

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.myContainer} style={{ backgroundColor: '#FFF' }}>
        <Divider variant='middle' />
        <div className={classes.filter}>
          <InputBase
            className={classes.input}
            onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)}
            placeholder='Press enter to add tags to filter'
            inputProps={{ 'aria-label': 'Press enter to add tags to filter' }}
          />
          {/* <input
        type='text'
        onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)}
        placeholder='Press enter to add tags'
        className={classes.input}
      /> */}
          <div className={classes.chips}>
            {tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                onDelete={() => removeTags(index)}
                color='primary'
                variant='outlined'
                className={classes.chip}
              />
              // <div key={index} className='tag'>
              //   <span className='tag-title'>{tag}</span>
              //   <span className='tag-close-icon' onClick={() => removeTags(index)}>
              //     x
              //   </span>
              // </div>
            ))}
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default function TagFilter() {
  const classes = useStyles();
  const selectedTags = (tags) => {
    console.log(tags);
  };
  return (
    <div className='App'>
      <TagsInput selectedTags={selectedTags} tags={[]} />
    </div>
  );
}
