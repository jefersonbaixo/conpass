import React from 'react';
import './Navbar.sass'
import logo from '../../assets/logo.png'

class Navbar extends React.Component {
    render(){
        return (
            <div className="nav">
                <a href="https://conpass.io"><img src={logo} alt="Logo"/></a>
                <a className="link" href="https://google.com">Link fake 1</a>
                <a className="link" href="https://google.com">Link fake 2</a>
                <a className="link" href="https://google.com">Link fake 3</a>
                <a className="link" href="https://google.com">Link fake 4</a>
            </div>
        )
    }
}

export default Navbar;