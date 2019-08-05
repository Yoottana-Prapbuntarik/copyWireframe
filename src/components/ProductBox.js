import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardImg } from 'reactstrap';
class ProductBox extends Component {
    render() {
        let { img, text, textCost , id } = this.props;
        return (
            <div className="col-md-3 col-12 card">
                <div className="wrap-card-img my-5" >
                    <div className="shadows">
                        <Card>
                            <NavLink className="wrapper-card-img " to={`/ProductDetail/${id}`}>
                                <CardImg className="styleImg card-img-top text-center"  src={img} alt="Card image cap" />
                            </NavLink>
                            <CardBody className="text-center text-body">
                                <p>
                                    <b>{text}</b>
                                    
                                </p >
                                <p>
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
