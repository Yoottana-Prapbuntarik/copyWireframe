import React, { Component } from 'react';
import '../Assets/css/styles.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }
    componentDidMount() {
        axios.put('https://www.mocky.io/v2/5d45c1fa300000c86ec5c8fc').then((response) => {
            this.setState({
                data: response.data.items[this.props.id - 1]
            })
        })
    }
    render() {
        let { buttonName, dataProduct } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col-4">สินค้าของฉัน</th>
                                    <th scope="col-4">จำนวน</th>
                                    <th scope="col-4">ราคา</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={dataProduct === undefined ? '' : dataProduct.img} width="150px" alt="img-product" />
                                    </td>
                                    <td>{dataProduct === undefined ? '' : dataProduct.amount}</td>
                                    <td>{dataProduct === undefined ? '' : dataProduct.cost}</td>
                                </tr>
                                {buttonName ? (
                                    <tr>
                                        <td>
                                            <NavLink className="btn btn-secondary" to="/Cart">{buttonName}</NavLink>
                                        </td>
                                        <td>ราคารวม</td>
                                        <td>{dataProduct === undefined ? '' : dataProduct.cost} บาท</td>
                                    </tr>
                                ) :
                                    (
                                        <tr>
                                            <td></td>
                                            <td>ราคารวม</td>
                                            <td>{dataProduct === undefined ? '' : dataProduct.cost} บาท</td>
                                        </tr>
                                    )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cart;
