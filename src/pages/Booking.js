import React, { Component } from 'react';
import BarStatus from '../components/BarStatus';
import { NavLink } from 'react-router-dom';
class Booking extends Component {
    render() {
        return (
            <div className="container">
                <div className="Mycart row">
                    <BarStatus status="Booking" />
                    <div className="col-md-6 mt-5 Booking">
                        <h1 className="text-center mt-auto mb-auto"><b>เลขที่บัญชี</b></h1>
                    </div>
                    <div className="col-md-6 buttonBooking text-center">
                        <h1><b>สั่งซื้อเรียบร้อยแล้ว (รอชำระเงิน)</b></h1>
                        <h5><b>จำนวนเงินที่ต้องชำระ</b></h5>
                        <h3><b>900 บาท</b></h3>
                        <NavLink type="submit" className="btn btn-secondary w-100" to="/Login">ถัดไป</NavLink>
                        <br />
                        <NavLink type="submit" className="btn btn-light w-100 mt-3" to="/">ไปหน้าแรก</NavLink>
                    </div>
                </div>
            </div >
        )
    }
}

export default Booking;
