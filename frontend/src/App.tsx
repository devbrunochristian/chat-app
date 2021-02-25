import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import theme from './Theme';
import Login from './Components/Login';
import Register from './Components/Register';
import Chat from './Components/Chat';
import Auth from './Components/Auth';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Auth />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <ProtectedRoute path="/chat" Component={Chat} />
            <Route path="*" render={() => <h1>404 Page not found</h1>} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
