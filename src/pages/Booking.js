import React, { Component } from 'react';
import BarStatus from '../components/BarStatus';
import {NavLink} from 'react-router-dom';
class Booking extends Component {
    render() {
        return (
            <div className="container">
                <div className="Mycart">
                    <BarStatus status="Booking"/>
                    <div className="row">
                        <div className="col-12 text-center">
                            <NavLink type="submit" className="btn btn-secondary w-50" to="/Member" >ถัดไป</NavLink>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Booking;
