import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class ProductDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            amount: 0,
            text: 'คลิกเพิ่มจำนวน'
        }
    }
    AmountItems = () => {
        this.setState({
            amount: this.state.amount + 1,
            text: ''
        })
    }
    render() {
        let { amount, text } = this.state;

        return (
            <div className="container  ProductDetail " >
                <div className="row">
                    <div className="col-md-6 box-img">
                        <img className="img-responsive" src="https://www.high-everydaycouture.com/media/catalog/product/S/0/S0121719564-1_999.png" alt="img product" />
                    </div>
                    <div className="col-md-6">
                        <div className="container">
                            <h3><b>Pinstrpe High Waist Shirt <br />900 บาท
                            &nbsp;
                            <s className="text-secondary">1280 บาท</s>
                            </b>
                            </h3>
                            <br />
                            <div className="mt-3">
                                <button className="btn_1" onClick={this.AmountItems}>
                                    <div className="text-center">{amount > 0 ? (amount) : (text)}</div>
                                </button>
                                <br />
                                <NavLink className="btn_2 mt-3" to="/Mycart">หยิบใส่ตระกร้า</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default ProductDetail;