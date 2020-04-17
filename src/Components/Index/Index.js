import React, {Component} from 'react';

import Home from './../Home/Home'
import Work from './../Work/Work'
import Portfolio from './../Portfolio/Portfolio'
import Profile from './../Profile/Profile'
import About from './../About/About'
import Social from './../Social/Social'
import Footer from './../Footer/Footer'


class Index extends Component {
    render () {
      return (
        <div>
            <Home />
            <Work />
            <Portfolio />
            <Profile />
            <About />
            <Social />
            <Footer />
        </div>
      );
    }
}
export default Index;
