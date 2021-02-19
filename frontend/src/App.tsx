import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import theme from './Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button color="primary">Chat APP</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
