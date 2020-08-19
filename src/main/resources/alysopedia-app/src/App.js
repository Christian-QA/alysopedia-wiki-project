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
import Error from './pages/Error';
import Navigation from './components/Navigation';
import Portal from './pages/admin/Portal';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="./Wiki.js"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" exact component={/* alternative is () => <Home />*/Home} />
             <Route path="/Wiki" exact component={Wiki}/>
             <Route path="/About" exact component={About}/>
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