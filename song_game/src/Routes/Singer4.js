import React, { useState } from 'react';
import { ButtonGroup, Button, Grid, Box, TextField } from '@mui/material';
import { Link, Outlet  } from "react-router-dom";


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
        return'red';  
      default:
        return 'transparent'; 
    }
  };      

  return (
    <Box
      width={300} 
      my={2} 
      display="flex"
      flexDirection="column"
      alignItems="flex-start" 
      p={2} 
      sx={{ 
        border: '1px solid grey', 
        textAlign: 'center',
        minHeight: '500px' 
      }} 
    >
      {props.staticArr.map((item, index) => (
        <Box
          key={index}
          sx={{
            border: '1px solid grey',
            padding: '8px',
            backgroundColor: getBackgroundColor(item.id), // Set background color based on id
            color: 'white', // Set text color for better readability
            marginBottom: '8px', // Add space between boxes
          }}
        >
          {item.text}
        </Box>
      ))}
      {props.data && (
        <Box sx={{ 
          border: '1px solid grey', 
          padding: '8px',
          color: 'white', // Set text color for better readability
          backgroundColor: "red",
          marginBottom: '8px',
        }}>
          {props.data}
        </Box>    
      )}
    </Box>
  );
}

function UsersBtn() {
  return (
    <ButtonGroup variant="contained" disableElevation aria-label="Basic button group" style={{ gap: '50px' }}>
      <Link to="/singers/singer1" style={{ textDecoration: 'none' }}>
        <Button style={{ backgroundColor: "green", color: 'white' }}>Singer 1</Button>
      </Link>
      <Link to="/singers/singer2" style={{ textDecoration: 'none' }}>
        <Button style={{ backgroundColor: "blue", color: 'white' }}>Singer 2</Button>
      </Link>
      <Link to="/singers/singer3" style={{ textDecoration: 'none' }}>
        <Button style={{ backgroundColor: "black", color: 'white' }}>Singer 3</Button>
      </Link>
      <Link to="/singers/singer4" style={{ textDecoration: 'none' }}>
        <Button style={{ backgroundColor: "red", color: 'white' }}>Singer 4</Button>
      </Link>
    </ButtonGroup>
  );
}


function Singer4() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if(event.keyCode === 13) {
      const newItem = {
        id: 4, // Assuming id to be sequential
        text: event.target.value
      };
      setItems([...items, newItem]);
    }
  }

  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" style={{ marginTop: '50px' }}>
      <Grid item>
        <UsersBtn />
      </Grid>  
      <Grid>
        <TextField style={{marginTop:'10px', }} onChange={handleChange} onKeyDown={handleKeyDown}/>
      </Grid>
      <Grid item>
        <Boxz data={text} staticArr={items} />
      </Grid>
    </Grid>
  );
}

export default Singer4;
