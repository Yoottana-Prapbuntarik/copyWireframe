import React, { Component } from 'react';
import BarStatus from '../components/BarStatus';
class Booking extends Component {
    render() {
        return (
            <div className="container ">
                <div className="Mycart">
                    <BarStatus status="Booking" />
                    <div className="row">
                        <div className="col-12 text-center">
                            <button type="submit" className="btn btn-secondary w-50 " >ถัดไป</button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Booking;
