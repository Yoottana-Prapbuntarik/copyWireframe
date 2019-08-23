import React, { Component } from 'react';
import Mycart from '../pages/Mycart';
class Order extends Component {

    render() {
        return (
            <div>
                <h1>รายการสั่งซื้อ</h1>
                <Mycart/>
            </div>
        )
    }
}

export default Order;
