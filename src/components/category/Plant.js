import React, { Component } from 'react'
import ProductBox from '../ProductBox';
import axios from 'axios';
class Plant extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    componentDidMount() {
        axios.get('https://www.mocky.io/v2/5d45bb3d300000e762c5c8f2').then((response) => {
            this.setState({
                data: response.data.plant
            })
        })

    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.state.data.map((datas) => { return <ProductBox text={datas.name} textCost={datas.cost} img={datas.img} id={datas.key} /> })
                    }
                </div>
            </div>
        )
    }
}

export default Plant;
