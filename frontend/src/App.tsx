import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Theme';
import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;
