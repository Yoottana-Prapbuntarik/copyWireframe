import React, { Component } from 'react';
import {connect} from 'react-redux';
import Cart from './Cart';
class Order extends Component {
    render() {
        return (
            <div>
                <h1>รายการสั่งซื้อ</h1>
                <Cart  dataProduct={this.props.addedItems} AllPrice={this.props.allCost}/>
            </div>
        )
    }
}
const mapStateToProps =(state)=>{
    return{
        addedItems: state.addedItems,
        allCost:state.allCost

    }
}
export default connect(mapStateToProps)(Order);
