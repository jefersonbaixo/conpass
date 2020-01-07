import React from 'react';
import './Button.sass'


class Button extends React.Component {
    render() {
        return (
            <div className="buttonArea">
                <button className="hotspotButton">Create Hotspot</button>
            </div>
        )
    }
}

export default Button;