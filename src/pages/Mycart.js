import React, { Component } from 'react';
import Cart from '../components/Cart';
import { NavLink } from 'react-router-dom';
class Mycart extends Component {
    render() {
        return (
            <div>

                <div className="container Mycart mb-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="header">
                                ตระกร้าของฉัน
                    </h1>
                        </div>
                    </div>
                </div>
                <Cart />
                <hr width="58%"/>
                <div className="container  mt-5 ">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <NavLink to="/Product">เลือกซื้อสินค้าต่อ</NavLink>
                        </div>
                        <div className="col-md-2  col-12">
                            <NavLink>ล้างตะกร้า</NavLink>
                        </div>
                        <div className="col-md-3   col-12">
                        <button className="btn btn-secondary w-100">ดำเนินการต่อ</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Mycart;