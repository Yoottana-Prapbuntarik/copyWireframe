import React, { Component } from 'react';
class BarStatus extends Component {
    render() {
        let { status } = this.props;
        return (
            <div className="container">

                <div className="row text-center text-secondary">
                    <div className="col-md-4 col-4">
                        {status === 'Adress' ?
                            (
                                <div className="text-primary"> การส่งสินค้า</div>
                            ) : (
                                <div>การส่งสินค้า</div>
                            )
                        }
                    </div>
                    <div className="col-md-4 col-4">
                        {status === 'Confirm' ?
                            (
                                <div className="text-primary"> ตรวจสอบรายการสั่งซื้อ
                                </div>
                            ) : (
                                <div>ตรวจสอบรายการสั่งซื้อ
                                </div>
                            )
                        }
                    </div>
                    <div className="col-md-4 col-4">
                        {status === 'Booking' ?
                            (
                                <div className="text-primary"> ยืนยัน
                                </div>
                            ) : (
                                <div>ยืนยัน
                                </div>
                            )
                        }
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default BarStatus;
