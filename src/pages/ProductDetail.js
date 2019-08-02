import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';
class ProductDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            amount: 1
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen }));
    }
    HandleAmount = (e) => {
        this.setState({ amount: parseInt(e.target.value) })
    }
    render() {
        console.log(this.state.amount)
        return (
            <div className="container  ProductDetail">
                <div className="row">
                    <div className="col-md-6 box-img">
                        <img className="img-responsive" src="https://www.high-everydaycouture.com/media/catalog/product/S/0/S0121719564-1_999.png"
                            alt="img product" />
                    </div>
                    <div className="col-md-6">
                        <div className="container">
                            <h3><b>Pinstrpe High Waist Shirt <br />900 บาท
                            &nbsp;
                            <s className="text-secondary">1280 บาท</s>
                            </b>
                            </h3>
                            <br />
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle className="buttonAmount">
                                    {this.state.amount}
                                    <div className="caret"></div>
                                </DropdownToggle>
                                <DropdownMenu className="text-center">
                                    <DropdownItem onClick={this.HandleAmount} value={1}>1</DropdownItem>
                                    <DropdownItem onClick={this.HandleAmount} value={2}>2</DropdownItem>
                                    <DropdownItem onClick={this.HandleAmount} value={3}>3</DropdownItem>
                                    <DropdownItem onClick={this.HandleAmount} value={4}>4</DropdownItem>
                                    <DropdownItem onClick={this.HandleAmount} value={5}>5</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <br />
                            <NavLink className="buttonAddCart mt-3" to="/Mycart">หยิบใส่ตระกร้า</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProductDetail;