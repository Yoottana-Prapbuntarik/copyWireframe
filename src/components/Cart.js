import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Cart extends Component {

    render() {
        let { buttonName } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table class="table">
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
                                        รูปภาพ
                                    </td>
                                    <td>1</td>
                                    <td>500บาท</td>
                                </tr>
                                {buttonName ? (
                                    <tr>
                                        <td>
                                            <NavLink className="btn btn-secondary" to="/Mycart">{buttonName}</NavLink>
                                        </td>
                                        <td>ราคารวม</td>
                                        <td>500 บาท</td>
                                    </tr>
                                ) :
                                    (
                                        <tr>
                                            <td></td>
                                            <td>ราคารวม</td>
                                            <td>500 บาท</td>
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
