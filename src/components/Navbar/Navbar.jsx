import React from 'react';
import './Navbar.sass';
import logo from '../../assets/logo.png';

const Link = props =>
    <a className="link" onClick={props.onClick} href={props.url}>Link fake {props.id}</a>

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            links: [
                { url: 'https://conpass.io', id: 0 },
                { url: 'https://google.com', id: 1 },
                { url: 'https://facebook.com', id: 2 },
                { url: 'https://reactjs.org', id: 3 },
            ]
        }
    }

    render() {
        const listItems = this.state.links.map((link, i) =>
            <Link
                url={this.state.links[i].url} key={i} id={i}
                onClick={e => this.props.onClick(e, this.state.links[i])}
            />
        );
        return (
            <div className="nav">
                <img src={logo} alt="Logo" />
                {listItems}
            </div>
        )
    }
}

export default Navbar;