import React, { Component } from 'react';
import BarStatus from '../components/BarStatus';
import {NavLink} from 'react-router-dom';
class CardAddress extends Component {
    
    render() {
        return (
            <div className="Mycart">
                <BarStatus status="Adress"/>
                <div className="container">
                        <div className=" mx-auto col-md-6">
                            <form className="mt-3">
                                <div className="row">
                                <div className="form-group col-12 my-2">
                                    <label htmlFor="fnameAndlname">ชื่อ-สกุล</label>
                                    <input type="text" className="form-control" id="fnameAndlname"/>
                                </div>
                                <div className="form-group my-2  col-12">
                                    <label htmlFor="Address">ที่อยู่จัดส่ง</label>
                                    <input type="text" className="form-control" id="Address" placeholder="เลขที่ หมู่บ้าน คอนโด ชื่อถนน"/>
                                </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-6 my-2">
                                        <input type="text" className="form-control" id="Address" placeholder="แขวง"/>
                                    </div>
                                    <div className="form-group col-6 my-2">
                                        <input type="text" className="form-control" id="Address" placeholder="เขต"/>
                                    </div>
                                    <div className="form-group col-6 my-2">
                                        <input type="text" className="form-control" id="Address" placeholder="จังหวัด"/>
                                    </div>
                                    <div className="form-group col-6 my-2">
                                        <input type="text" className="form-control" id="Address" placeholder="รหัสไปรษณีย์"/>
                                </div>
                                    </div>
                                <div className="form-group  mt-4">
                                    <label htmlFor="tel">เบอร์โทรศัพท์</label>
                                    <input type="text" className="form-control" id="tel" placeholder="เบอร์โทรศัพท์"/>
                                </div>
                                <NavLink type="submit" className="btn btn-secondary w-100 my-5" to={`/Confirm`}>ถัดไป</NavLink>
                            </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default CardAddress;