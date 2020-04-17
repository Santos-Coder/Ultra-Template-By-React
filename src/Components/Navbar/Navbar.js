import React from 'react';
import { Link } from 'react-router-dom';
import { Navdiv ,  NavTit , navLogo , UlItem , Anch , NavUl } from './style'

const LinkStyle = {
    textDecoration: 'none',
}

const Navbar = () => {
    return (
        <Navdiv>
            
            <div className="container">
                
                <navLogo>
                    <NavTit>Ultra Profile</NavTit>
                </navLogo>
                
                <NavUl>
                    <UlItem><Link style={LinkStyle} to="/" ><Anch href="#">Home</Anch></Link></UlItem>
                    <UlItem><Anch href="#">Work</Anch></UlItem>
                    <UlItem><Anch href="#">Portfolio</Anch></UlItem>
                    <UlItem><Anch href="#">Resume</Anch></UlItem>
                    <UlItem><Anch href="#">About</Anch></UlItem>
                    <UlItem><Link style={LinkStyle} to="/contact"><Anch>Contact</Anch></Link></UlItem>
                </NavUl>
                
            </div>
            
        </Navdiv>
    )
}

export default Navbar;