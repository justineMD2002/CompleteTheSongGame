import React, { useState, useEffect } from 'react';
import { ButtonGroup, Button, Grid, Box, TextField } from '@mui/material';
import { Link, useLocation  } from "react-router-dom";

  function Boxz(props) {

    const getBackgroundColor = (id) => {
      switch (id) {
        case 1:
          return 'green';
        case 2:
          return 'blue';
        case 3:
          return 'black';
        case 4:
          return 'red';
        default:
          return 'transparent'; 
      }
    };      

    return (
    <Box
      width={500} 
      my={2} 
      display="flex"
      flexDirection="column"
      alignItems="flex-start" 
      p={2} 
      sx={{ 
        border: '1px solid grey', 
        borderRadius: '20px',  
        textAlign: 'center',
        minHeight: '500px',
      }} 
    >
      {props.staticArr.map((item, index) => (
        <Box
          key={index}
          sx={{
            border: '1px solid grey',
            padding: '10px',
            borderRadius: '20px',  
            backgroundColor: getBackgroundColor(item.id), 
            color: 'white',
            minWidth: '98%',
            marginBottom: '8px',
            textAlign: 'left',
            wordWrap: 'break-word', 
            overflow: 'hidden', 
            textOverflow: 'ellipsis', 
            maxWidth: '97%', 
          }}
        >
          {item.text}
        </Box>
      ))}
      {props.data && (
        <Box sx={{  
          border: '1px solid grey', 
          padding: '8px',
          backgroundColor: "green",
          color: 'white',
          marginBottom: '8px',
          textAlign: 'left',
          borderRadius: '20px',  
          minHeight: '25px',
          minWidth: '98%',
          overflow: 'hidden',
          textOverflow: 'ellipsis', 
          maxWidth: '98%',
        }}>
          {props.data}
        </Box>  
      )}  
    </Box>

    );
  }

function UsersBtn(props) {
  return (
    <ButtonGroup variant="contained" disableElevation aria-label="Basic button group" >
      <Link to="/singer/singer1" state={props.stet} style={{ textDecoration: 'none' }}>
        <Button style={{ backgroundColor: "green", color: 'white', width: '150px' }}>Singer 1</Button>
      </Link>
      <Link to="/singer/singer2" state={props.stet} style={{ textDecoration: 'none' }}>
        <Button style={{ backgroundColor: "blue", color: 'white', width: '150px' }}>Singer 2</Button>
      </Link>
      <Link to="/singer/singer3" state={props.stet} style={{ textDecoration: 'none' }}>
        <Button style={{ backgroundColor: "black", color: 'white', width: '150px' }}>Singer 3</Button>
      </Link>
      <Link to="/singer/singer4" state={props.stet} style={{ textDecoration: 'none' }}>
        <Button style={{ backgroundColor: "red", color: 'white', width: '150px' }}>Singer 4</Button>
      </Link>
    </ButtonGroup>
  );
}

function Singer1() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  const location = useLocation();
  const state = location.state;

  useEffect(() => {
    if(state) {
      setItems(state);
    }
  }, [state]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if(event.keyCode === 13) {
      const newItem = {
        id: 1, // Assuming id to be sequential
        text: event.target.value
      };
      setItems([...items, newItem]);
      setText('')
      event.target.value = '';
    }
  }

  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" style={{ marginTop: '15px' }}>
      <Grid item>
        <h1>Complete the Lyrics</h1>
      </Grid> 
      <Grid item>
        <UsersBtn stet={items}/>
      </Grid> 
      <Grid item>
        <TextField style={{marginTop:'10px', width: '570px', border: '4px solid black', borderRadius: '20px' }} onChange={handleChange} onKeyDown={handleKeyDown}/>
      </Grid>   
      <Grid item>
        <Boxz data={text} staticArr={items} />
      </Grid>
    </Grid>
  );
}

export default Singer1;
