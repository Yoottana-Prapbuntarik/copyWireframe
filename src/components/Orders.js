import React, { Component } from 'react';
import axios from 'axios';
import Cart from './Cart';
class Order extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }
    componentDidMount() {
        axios.get('https://shop-api-services.herokuapp.com/Cart').then((response) => {
            this.setState({
                data: response.data[0]
            })
        })
    }

    render() {
        return (
            <div>
                <h1>รายการสั่งซื้อ</h1>
                <Cart  dataProduct={this.state.data}/>
            </div>
        )
    }
}

export default Order;
