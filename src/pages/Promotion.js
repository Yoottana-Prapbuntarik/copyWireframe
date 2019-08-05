import React, { Component } from 'react';
import Shirt from '../components/Shirt';
import Plant from '../components/Plant';
import Banner from '../components/Banner';
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import OwlCarousel from 'react-owl-carousel';

class Promotion extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
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
                    <Banner link="Promotion" _padding="10" color="white" text="โปรโมชัน" 
                    img="https://images.unsplash.com/photo-1532795986-dbef1643a596?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" />
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
                                            Featured
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
                                <Plant />
                            </div>
                            <div className="row item">
                                <Shirt />
                            </div>

                        </OwlCarousel >
                    </div >
                </div >
            </div >
        )
    }
}
export default Promotion;
