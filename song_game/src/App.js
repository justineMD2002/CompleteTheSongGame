import { ButtonGroup, Button, Grid, Box, TextField } from '@mui/material';
import { Link,} from "react-router-dom";

function Boxz(props) {
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
  </Box>
  );
}

function UsersBtn(props) {
  return (
    <ButtonGroup variant="contained" disableElevation aria-label="Basic button group" >
      <Link to="/singer/singer1" style={{ textDecoration: 'none' }}>
        <Button style={{ backgroundColor: "green", color: 'white', width: '150px' }}>Singer 1</Button>
      </Link>
      <Link to="/singer/singer2" style={{ textDecoration: 'none' }}>
        <Button style={{ backgroundColor: "blue", color: 'white', width: '150px' }}>Singer 2</Button>
      </Link>
      <Link to="/singer/singer3" style={{ textDecoration: 'none' }}>
        <Button style={{ backgroundColor: "black", color: 'white', width: '150px' }}>Singer 3</Button>
      </Link>
      <Link to="/singer/singer4" style={{ textDecoration: 'none' }}>
        <Button style={{ backgroundColor: "red", color: 'white', width: '150px' }}>Singer 4</Button>
      </Link>
    </ButtonGroup>
  );
}

function App() {
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" style={{ marginTop: '15px' }}>
      <Grid item>
        <h1>Complete the Lyrics</h1>
      </Grid>  
      <Grid item>
        <UsersBtn />
      </Grid>  
      <Grid item> 
        <TextField disabled style={{marginTop:'10px', width: '570px', border: '4px solid black', borderRadius: '20px' }} />
      </Grid>
      <Grid item>
        <Boxz />
      </Grid>
    </Grid>
  );
}

export default App;
