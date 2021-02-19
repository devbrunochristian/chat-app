import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Theme';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Register />
      </div>
    </ThemeProvider>
  );
}

export default App;
