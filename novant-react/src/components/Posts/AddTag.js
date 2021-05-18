import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
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
    width: '100%',
  },
  input: {
    paddingLeft: '15px',
    paddingRight: '15px',
    marginRight: 'auto',
    marginLeft: '10%',
    marginTop: '2%',
    marginBottom: '15px',
    width: '70%',
    backgroundColor: '#F0F2F5',
    borderRadius: '10px',
    float: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    justifyItems: 'center',
  },
  filter: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFF',
  },
  TypeTagContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#FFF',
  },
  chips: {
    justifyItems: 'center',
    marginTop: '1%',
    marginBottom: '15px',
    marginLeft: 0,
  },
  chip: {
    marginBottom: '1%',
    marginRight: '5px',
  },
}));

const TagsInput = (props) => {
  const classes = useStyles();
  const [tags, setTags] = React.useState(props.tags);
  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    props.selectedTags([...tags.filter((_, index) => index !== indexToRemove)]);

    // props.parentCallbackTags2(tags);
  };
  const addTags = (event) => {
    if (event.target.value !== '') {
      setTags([...tags, event.target.value.toUpperCase()]);
      props.selectedTags([...tags, event.target.value.toUpperCase()]);
      // props.parentCallbackTags2(tags);
      event.target.value = '';
    }
  };
  const [type, setType] = React.useState('Feed');
  const handleChange = (event) => {
    setType(event.target.value);
    props.selectedType(event.target.value);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.myContainer} style={{ backgroundColor: '#FFF' }}>
        <div className={classes.filter}>
          <div className={classes.TypeTagContainer}>
            <FormControl variant='outlined' className={classes.formControl}>
              <InputLabel id='demo-simple-select-required-label'>
                Type
              </InputLabel>
              <Select
                labelId='demo-simple-select-required-label'
                id='demo-simple-select-required'
                value={type}
                onChange={handleChange}
                label='Type'
                className={classes.select}
                style={{ marginTop: '0px' }}
              >
                <MenuItem value={'Feed'}>Feed</MenuItem>
                <MenuItem value={'Problem'}>Problem</MenuItem>
                <MenuItem value={'Offer'}>Offer</MenuItem>
              </Select>
            </FormControl>
            <InputBase
              className={classes.input}
              onKeyUp={(event) =>
                event.key === 'Enter' ? addTags(event) : null
              }
              placeholder='Press enter to add tags'
              inputProps={{ 'aria-label': 'Press enter to add tags' }}
            />
          </div>
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

export default function AddTag(props) {
  const classes = useStyles();
  // const [finalTags, setFinalTags] = useState([]);
  const selectedTags = (tags) => {
    console.log(tags);
    props.parentCallbackTags(tags);
  };
  const selectedType = (type) => {
    props.parentCallbackType(type);
  };

  return (
    <div className='App'>
      <TagsInput
        // parentCallbackTags2={selectedTags}
        selectedType={selectedType}
        selectedTags={selectedTags}
        tags={[]}
      />
    </div>
  );
}
