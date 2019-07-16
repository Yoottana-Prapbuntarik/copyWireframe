import React, { Component } from 'react'
import ProductBox from '../components/ProductBox';
import Banner from '../components/Banner';
import {Dropdown , DropdownMenu , DropdownToggle ,DropdownItem} from 'reactstrap';
import OwlCarousel from 'react-owl-carousel';

class News extends Component {
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
                <Banner link="News" _padding="10"  text="สินค้าใหม่" img="https://images.unsplash.com/photo-1513117070-47df6136fd4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 col-12  mt-5">
                            <h1>Product Name</h1>
                        </div>
                        <div className="col-xl-1 col-12 mt-5">
                            <p style={{ fontSize: '15px', lineHeight: '2.5rem' }}> Sort By</p>
                        </div>
                        <div className="col-xl-1 col-12  mt-5">
                            <div className="menudropdown ml-auto">
                                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                    <DropdownToggle caret>
                                        Featured
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>เสื้อ</DropdownItem>
                                        <DropdownItem>ชุดกระโปรง</DropdownItem>
                                        <DropdownItem>รองเท้า</DropdownItem>
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
                            <ProductBox className="item" text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <ProductBox className="item" text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1549897380-2772a6d7179f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <ProductBox className="item" text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <ProductBox className="item" text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1549897380-2772a6d7179f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <ProductBox className="item" text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <ProductBox className="item" text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1549897380-2772a6d7179f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <ProductBox className="item" text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <ProductBox className="item" text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1549897380-2772a6d7179f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <ProductBox className="item" text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <ProductBox className="item" text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1549897380-2772a6d7179f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <ProductBox className="item" text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <ProductBox className="item" text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1549897380-2772a6d7179f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        </div>
                        <div className="row item">
                            <ProductBox className="item" text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <ProductBox className="item" text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1549897380-2772a6d7179f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <ProductBox className="item" text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <ProductBox className="item" text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1549897380-2772a6d7179f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <ProductBox className="item" text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <ProductBox className="item" text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1549897380-2772a6d7179f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <ProductBox className="item" text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <ProductBox className="item" text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1549897380-2772a6d7179f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <ProductBox className="item" text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <ProductBox className="item" text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1549897380-2772a6d7179f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <ProductBox className="item" text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <ProductBox className="item" text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1549897380-2772a6d7179f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        </div>

                    </OwlCarousel >
                </div >
            </div >
        </div >
        )
    }
}

export default News
