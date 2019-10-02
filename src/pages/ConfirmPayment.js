import React, { Component } from 'react'
import Sidebar from '../components/Sidebar';
class  ConfirmPayment extends Component {
    render() {
        return (
            <div className="container-fluid member">
                    <div className="row">
                        <Sidebar/>
                        <div className="col-md-6 col-12">
                        <h1>แจ้งหลักฐานการชำระเงิน</h1>
                        </div>
                </div>
            </div>
        )
    }
}

export default ConfirmPayment;
