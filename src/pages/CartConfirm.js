import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import BarStatus from '../components/BarStatus';
class CartConfirm extends Component {
    render() {
        return (
            <div className="container">
                <div className="Mycart">
                    <BarStatus status="Confirm" />
                    <div className="row">
                        <div className="col-12 text-center">
                            <NavLink className="btn btn-secondary w-50" to="/Booking">ถัดไป</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CartConfirm;