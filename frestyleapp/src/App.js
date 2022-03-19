import logo from './logo.svg';
import './App.css';

import LoginModule from './Login/login';
import Button from '@mui/material/Button';

function App() {
  return (
    <>
   <h1>testing app </h1>
   <Button variant="contained" color="primary">
      Hello World
    </Button>

    <LoginModule></LoginModule>

    </>
  );
}

export default App;
