import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
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
                                        
                                    </td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                {buttonName ? (<React.Fragment>
                                    <tr>
                                        <td>
                                            <NavLink className="btn btn-secondary" to="/Mycart">{buttonName}</NavLink>
                                        </td>
                                        <td>ราคารวม</td>
                                        <td>@twitter</td>
                                    </tr>
                                </React.Fragment>
                                ) :
                                    (
                                        <React.Fragment>
                                            <tr>
                                                <td></td>
                                                <td>ราคารวม</td>
                                                <td>500 บาท</td>
                                            </tr>
                                        </React.Fragment>
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
