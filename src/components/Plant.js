import React, { Component } from 'react'
import ProductBox from './ProductBox';
import axios from 'axios';
class Plant extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    componentDidMount() {
        axios.get('https://www.mocky.io/v2/5d45c1fa300000c86ec5c8fc').then((response) => {
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
                        this.state.data.map((datas) => { return <ProductBox text={datas.name} textCost={datas.cost} img={datas.img} id={datas.id} /> })
                    }
                </div>
            </div>
        )
    }
}

export default Plant;
