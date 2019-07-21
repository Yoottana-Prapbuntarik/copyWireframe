import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Category extends Component {
    render() {
        let { text, img } = this.props;
        let { styleBackgroundImage, textStyle } = {};
        styleBackgroundImage = {
            backgroundImage: `url(${img})`,
            backgroundRepeat: 'no-repeat',
            width: '100%', textAlign: 'center'
        };
        textStyle = {
            paddingTop: '15% ',
            paddingBottom: '15%',
            color: '#fff',
            fontSize: '25px'
        }
        return (
            <div className="col-md-4 col-12 mt-5">
                <div className="category">
                    <NavLink to="/404">
                        <div className="img-responsive" style={styleBackgroundImage}>
                            <p style={textStyle}><b>{text}</b></p>
                        </div>
                    </NavLink>
                </div>
            </div>
        )
    }
} export default Category;
