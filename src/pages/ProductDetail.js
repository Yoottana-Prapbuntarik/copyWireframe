import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';
class ProductDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            amount: 1,
            data: {}
        }
        this.toggle = this.toggle.bind(this);
    }
    componentDidMount() {
        let numberItems = this.props.match.params.id;
        axios.get('https://www.mocky.io/v2/5d45c1fa300000c86ec5c8fc').then((response) => {
            this.setState({
                data: response.data.items[[numberItems - 1]]
            })
        })

    }
    toggle() {
        this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen }));
    }
    HandleAmount = (e) => {
        this.setState({ amount: parseInt(e.target.value) })
    }
    render() {
        let { data } = this.state;
        return (
            <div className="container  ProductDetail">
                <div className="row">
                    <div className="col-md-6 box-img">
                        <img className="img-responsive" src={data.img}
                            alt="img product" />
                    </div>
                    <div className="col-md-6">
                        <div className="container">
                            <h3>{data.name}<b><br />{data.cost}
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