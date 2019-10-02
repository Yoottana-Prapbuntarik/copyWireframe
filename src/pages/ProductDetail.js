import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
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
        this.addItemToCart = this.addItemToCart.bind(this);
    }
    async  componentDidMount() {
        let numberItems = this.props.match.params.id;
        await axios.get('https://www.mocky.io/v2/5d45c1fa300000c86ec5c8fc').then((response) => {
            this.setState({
                data: response.data.items[[numberItems - 1]]
            })
        })
    }
    addItemToCart() {
        let dataToDb = {
            name: this.state.data.name,
            img: this.state.data.img,
            amount: this.state.amount,
            cost: this.state.data.cost * this.state.amount
        }
        this.props.addItems(dataToDb);
        this.props.SumCost(dataToDb.cost);
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
                    <div className="col-md-6 mt-5">
                        <div className="container">
                            <h3 className="mt-5">{data.name}
                                <b>
                                    <br />{data.cost}&nbsp;<s className="text-secondary">1280 บาท</s>
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
                            {/* <a className="buttonAddCart mt-3" href="/Mycart">หยิบใส่ตระกร้า</a> */}
                            <NavLink className="buttonAddCart btn mt-3" to="/Mycart" onClick={this.addItemToCart}>หยิบใส่ตระกร้า</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        allCost: state.allCost
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addItems: (dataToDb) => {
            dispatch({
                type: "ADD_Item",
                payload: dataToDb
            })
        },
        SumCost:(cost)=>{
            dispatch({
                type:"Total",
                payload:cost
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);