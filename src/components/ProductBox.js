import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardImg } from 'reactstrap';
class ProductBox extends Component {
    render() {
        let { img, text, textCost  } = this.props;
        return (
            <div className="col-md-3 col-12">
                <div className="wrap-card-img my-5" >
                    <div className="shadows">
                        <Card>
                            <NavLink className="wrapper-card-img " to="/ProductDetail/">
                                <CardImg style={{ width: '100%', height: '100%' }} className="card-img-top text-center" src={img} alt="Card image cap" />
                            </NavLink>
                            <CardBody className="text-center">
                                <p style={{ fontSize: '15px' }}>
                                    <b>{text}</b>
                                </p >
                                <p style={{ fontSize: '15px' }}>
                                    {textCost}
                                </p >
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
} export default ProductBox;
