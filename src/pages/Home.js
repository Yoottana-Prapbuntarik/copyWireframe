import React, { Component } from 'react';
import Banner from '../components/Banner';
import Category from '../components/Category';
import ProductBox from '../components/ProductBox';
class Home extends Component {

    render() {
        return (
            <div className="mt-5">
                <Banner text="โปรโมชั่น" img="https://images.unsplash.com/photo-1514866903401-53c470bfaf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                <div className="container">
                    <div className="row">
                        <Category text="Category#1" img="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        <Category text="Category#2" img="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        <Category text="Category#3" img="https://images.unsplash.com/photo-1549897380-2772a6d7179f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        <div className="col-12 text-center my-3">
                            <h1>เสื้อผ้าเเนะนำสำหรับคุณ</h1>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <ProductBox text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" /> 
                        <ProductBox text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1549897380-2772a6d7179f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        <ProductBox text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        <ProductBox text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1549897380-2772a6d7179f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        <ProductBox text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" /> 
                        <ProductBox text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1549897380-2772a6d7179f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        <ProductBox text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        <ProductBox text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1549897380-2772a6d7179f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        <ProductBox text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" /> 
                        <ProductBox text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1549897380-2772a6d7179f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        <ProductBox text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        <ProductBox text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1549897380-2772a6d7179f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        <ProductBox text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" /> 
                        <ProductBox text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1549897380-2772a6d7179f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        <ProductBox text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        <ProductBox text="midi off shoulder Ruched dress" textCost="500 บาท" img="https://images.unsplash.com/photo-1549897380-2772a6d7179f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    </div>


                </div>
            </div>

        )
    }
}

export default Home;
