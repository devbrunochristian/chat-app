import React from 'react';
import {  ThemeProvider } from '@material-ui/core/styles';
import theme from './Theme';
import { Button } from '@material-ui/core';


function App() {
  return (
    <ThemeProvider theme={theme}>

    <div className="App">
      <Button color='primary'>

      Chat APP
      </Button>
    </div>
    </ThemeProvider>
  );
}

export default App;
