import React, {Component} from 'react';
import { HashRouter , Route} from 'react-router-dom'
import './App.css';

import Navbar from './Components/Navbar/Navbar'
import Contact from './Components/Contact/Contact'
import Index from './Components/Index/Index'



class App extends Component {
    render () {
      return (
        <HashRouter>
            <Navbar />
            <Route exact path='/' component={Index} />
            <Route path='/Contact' component={Contact} />
        </HashRouter>
      );
    }
}
export default App;
