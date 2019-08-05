import React, { Component } from 'react';
import Banner from '../components/Banner';
import Shirt from '../components/Shirt';
import Plant from '../components/Plant';
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import OwlCarousel from 'react-owl-carousel';

class Product extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
        };
    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    render() {
        return (
            <div>
                <div className="mt-5">
                    <Banner link="Product" _padding="10" text="สินค้าทั้งหมด"
                        img="https://images.unsplash.com/photo-1542060748-10c28b62716f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-xl-10 col-12  mt-3">
                                <h1>Product Name</h1>
                            </div>
                            <div className="col-xl-1 col-12 mt-3">
                                <p className="productPharagraph"> Sort By</p>
                            </div>
                            <div className="col-xl-1 col-12  mt-3">
                                <div className="menudropdown ml-auto">
                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                        <DropdownToggle caret>
                                            ชนิด
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>เสื้อ</DropdownItem>
                                            <DropdownItem>กระโปรง</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container owl-theme">
                        <OwlCarousel
                            loop
                            nav
                            margin={1} items={1}>
                            <div className="row item">
                                <Shirt />
                            </div>
                            <div className="row item">
                                <Plant />
                            </div>
                        </OwlCarousel >
                    </div >
                </div >
            </div >
        )
    }
}
export default Product;
