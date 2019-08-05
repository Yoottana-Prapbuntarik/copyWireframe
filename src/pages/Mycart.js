import React, { Component } from 'react';
import axios from 'axios';
import Cart from '../components/Cart';
import { NavLink } from 'react-router-dom';
class Mycart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }
    componentDidMount() {
        let numberItems = this.props.match.params.id;
        axios.get('https://www.mocky.io/v2/5d45c1fa300000c86ec5c8fc').then((response) => {
            this.setState({
                data: response.data.items[numberItems - 1]
            })
        })
    }
    render() {
        let { data } = this.state;
        return (
            <div>
                <div className="container Mycart mt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="header">
                                ตระกร้าของฉัน
                        </h1>
                        </div>
                    </div>
                </div>
                <Cart dataProduct={data} />
                <hr width="58%" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 py-3 col-12">
                            <NavLink to="/Product">เลือกซื้อสินค้าต่อ</NavLink>
                        </div>
                        <div className="col-md-2 py-3 col-12">
                            <NavLink to="#">ล้างตะกร้า</NavLink>
                        </div>
                        <div className="col-md-3  py-3 col-12">
                            <NavLink className="btn btn-secondary w-100" to={`/Address/${this.props.match.params.id}`}>ดำเนินการต่อ</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Mycart;