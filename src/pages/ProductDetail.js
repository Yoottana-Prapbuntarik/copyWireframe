import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
export default class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            amount : 0, 
            text :'คลิกเพิ่มจำนวน'
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    AmountItems=()=>{
        this.setState({
            amount : this.state.amount + 1 ,
            text :''
        })
        
    }
    render() {

        return (
            <div className="container  ProductDetail " >
                <div className="row">
                    <div className="col-md-6 box-img">
                        <img className="img-responsive" src="https://www.high-everydaycouture.com/media/catalog/product/S/0/S0121719564-1_999.png" alt="img product" />
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className="container">
                            <h3><b>Pinstrpe High Waist Shirt <br/>900 บาท <s className="text-secondary">1280 บาท</s></b></h3>
                            <br />
                            <div className="mt-3">
                                <button className=" btn_1  btnAmount" onClick={this.AmountItems}>
                                    <div className="text-center">{this.state.amount > 0 ? this.state.amount : this.state.text}</div>
                                </button>
                                <br/>
                                <NavLink className=" btn_2 mt-3" style={{textDecoration:'none'}} to="/Mycart">หยิบใส่ตระกร้า</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
