import React, { Component } from 'react';
import axios from 'axios';
import Banner from '../components/Banner';
import Shirt from '../components/category/Shirt';
import Plant from '../components/category/Plant';
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import OwlCarousel from 'react-owl-carousel';

class Product extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            data: []
        };
    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    componentDidMount() {
        axios.get('https://www.mocky.io/v2/5d45bb3d300000e762c5c8f2').then((response) => {
            this.setState({
                data: response.data.items
            })
        })

    }
    render() {
        return (
            <div>
                <div className="mt-5">
                    {console.log(this.state.data)
                    }
                    <Banner link="Product" _padding="10" text="สินค้าทั้งหมด"
                        img="https://images.unsplash.com/photo-1514866903401-53c470bfaf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 col-12  mt-5">
                                <h1>Product Name</h1>
                            </div>
                            <div className="col-xl-1 col-12 mt-5">
                                <p className="productPharagraph"> Sort By</p>
                            </div>
                            <div className="col-xl-1 col-12  mt-5">
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
                                <Shirt/>
                            </div>
                            <div className="row item">
                                <Plant/>
                            </div>
                        </OwlCarousel >
                    </div >
                </div >
            </div >
        )
    }
}
export default Product
