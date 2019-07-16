import React, { Component } from 'react'
class Cart extends Component {

    render() {
        return (
            <div className="container" style={{marginLeft:'70%',marginTop:'5%', width:'30%',border:'1px solid #000',position: 'relative', zIndex: '9999'}}>
                <div className="row">
                    <div className="col-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">สินค้าของฉัน</th>
                                    <th scope="col">จำนวน</th>
                                    <th scope="col">ราคา</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        )
    }
}

export default Cart
