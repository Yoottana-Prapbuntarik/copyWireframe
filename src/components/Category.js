import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Category extends Component {
    render() {
        return (
            <div className="col-md-4 col-12 mt-5">
                <div className="category">
                    <NavLink to="/404">
                        <div className="img-responsive" style={{ backgroundImage: `url(${this.props.img})`,  backgroundRepeat: 'no-repeat',
                            width:'100%',textAlign: 'center'}}>
                            <p className="text-white" style={{paddingTop:'15% ',paddingBottom:'15%'}}><b style={{ fontSize: '25px' }}>{this.props.text}</b></p>
                        </div>
                    </NavLink>
                </div>
            </div>
        )
    }
} export default Category;
