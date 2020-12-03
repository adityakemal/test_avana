import React, { Component } from 'react';
import './App.scss'
import { Grid, Container } from '@material-ui/core';

import Dashboard from './pages/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SideNav from './components/SideNav';

class App extends Component {
  render() {
    return(
      <Router>
          <Container maxWidth={false} disableGutters>
            <Grid container>
                <SideNav />
                <Switch>
                  <Route exact path='/' component={Dashboard}/>
                  <Route exact path='/dashboard' component={Dashboard}/>
                  <Route exact path="*" component={()=><Grid item xs={12} sm={true}><h1 style={{padding : '0 40px', textAlign : 'center'}}>{window.location.pathname}</h1></Grid> }/>
                </Switch>
            </Grid>
          </Container>
      </Router>
    )   
  }
}

export default App;