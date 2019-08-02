import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import BarStatus from '../components/BarStatus';
import Cart from '../components/Cart';
class CartConfirm extends Component {
    render() {
        return (
            <div className="container ">
                <div className="Mycart row">
                    <BarStatus status="Confirm" />
                    <div className="col-12 mt-5">
                        <h5><b>ตรวจสอบรายการสั่งซื้อ</b></h5>
                        <h5>กรุณาตรวจสอบรายการสินค้าและข้อมูลจัดส่งว่าถูกต้องครบถ้วน จากนั้นกดปุ่ม "ยืนยันการสั่งซื้อ"</h5>
                        <br />
                    </div>
                    <div className="col-6 text-left">
                        <h5><b>ที่อยู่ผู้สำหรับผู้จัดส่ง</b></h5>
                    </div>
                    <div className="col-6 text-right">
                        <NavLink className="text-primary" to="#"><b>เปลี่ยนที่อยู่</b></NavLink>
                    </div>
                    <div className="col-4">
                        <h5>ชื่อ - นามสกุล ผู้รับ</h5>
                        <h5>ที่อยู่ผู้รับ</h5>
                        <h5>เบอร์โทรผู้รับ</h5>

                    </div>
                    <div className="col-8 ">
                        <p>
                            ธันยพร ปึงทิพย์พิมานชัย
                        </p>
                        <p>
                            97/9 ถนน บางกรวย - ไทรน้อย ตำบลบางเลน อำเภอบางใหญ่ จังหวัดนนทบุรี 111
                        </p>
                        <p>
                            0823456789
                        </p>

                    </div>

                    <div className="col-6 text-left">
                        <h5><b>รายการสินค้า</b></h5>
                    </div>
                    <div className="col-6 text-right">
                        <NavLink className="text-primary" to="#"><b>แก้ไขสินค้า</b></NavLink>
                    </div>
                    <Cart/>
                    <div className="col-12 text-right">
                        <NavLink className="btn btn-secondary w-50" to="/Booking">ถัดไป</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
export default CartConfirm;