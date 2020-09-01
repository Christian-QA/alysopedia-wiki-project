import React, { Component } from 'react';
import logo from './images/logo.svg';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Wiki from './pages/Wiki';
import About from './pages/About';
import Category from './pages/Category';
import Error from './components/Error';
import Portal from './pages/admin/Portal';
import Collapsible from 'react-collapsible';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" exact component={/* alternative is () => <Home />*/Home} />
             <Route path="/Wiki" exact component={Wiki}/>
             <Route path="/About" exact component={About}/>
             <Route path="/Category" exact component={Category}/>
             <Route path="/Admin" exact component={Portal}/>
             <Route>
               <Error />
               <Redirect to="/"/>
             </Route>
           </Switch>    
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;