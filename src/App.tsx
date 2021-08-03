import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import Login from './Login';
import Register from './Register';
import Review from './Review';

function App() {

  return (
    <div className="App">
      <Router history={history}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/review" component={Review} />
            <Route path="/" render={props => ( <h1>Essa página não existe</h1> )} />
          </Switch>
      </Router>  
    </div>
  );
}

export default App;
