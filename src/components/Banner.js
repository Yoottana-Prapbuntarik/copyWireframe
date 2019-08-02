import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
class Banner extends Component {

    render() {
        let { img, _padding, color, text } = this.props;
        
        let { styleImageBackground, containerBaner, textStyle } = {};
            styleImageBackground = {
                backgroundImage: `url(${img})`,
                maxWidth: '100%',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                opacity: 0.9,
                backgroundSize: 'cover',
                padding: `${_padding}%`,
                width: '100%', 
                height: '100%'
            };
            containerBaner = { textDecoration: 'none' };
            textStyle = { fontSize: '70px', color: `${color}` };

        return (
            <div>
                <NavLink style={containerBaner} to={`/${this.props.link}`}>
                    <div className="container" style={styleImageBackground}>
                        <div className="row">
                            <div className="col-12 text-center text-white">
                                <h1 style={textStyle}>{text}</h1>
                            </div>
                        </div>

                    </div>
                </NavLink>
            </div>
        )
    }
}

export default Banner

