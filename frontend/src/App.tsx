import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import theme from './Theme';
import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>

        <div>

          <Navbar />

          <Switch>
            <Route path="/login">
              <Login />

            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route render={() => <h1>404 Page not found</h1>} />
            {/* <Route path="/">
            <Home />
          </Route> */}
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
