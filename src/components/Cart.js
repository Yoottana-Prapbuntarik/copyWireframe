import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Cart extends Component {

    render() {
        let { buttonName , dataProduct } = this.props;
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
                                    <img src={dataProduct.img} width="200px" alt="img-product"/>
                                    </td>
                                    <td>1</td>
                                    <td>{dataProduct.cost}</td>
                                </tr>
                                {buttonName ? (
                                    <tr>
                                        <td>
                                            <NavLink className="btn btn-secondary" to="/Mycart">{buttonName}</NavLink>
                                        </td>
                                        <td>ราคารวม</td>
                                        <td>{dataProduct.cost} บาท</td>
                                    </tr>
                                ) :
                                    (
                                        <tr>
                                            <td></td>
                                            <td>ราคารวม</td>
                                            <td>{dataProduct.cost} บาท</td>
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
