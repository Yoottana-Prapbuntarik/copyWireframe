import React, { Component } from 'react';
import facebook from '../Assets/images/facebook.png'
import ig from '../Assets/images/ig.png'
import line from '../Assets/images/line.png'
import twitter from '../Assets/images/twitter.png'
class Footer extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xl-6 col-12">
                        <b>&copy;2019&nbsp;Nattraphak.com</b>
                    </div>
                    <div className="col-xl-6 col-12">
                        #NattraphakPhatai &nbsp;
                                <img src={facebook}
                            alt="social"
                            width="25" />
                        &nbsp;
                                <img src={ig}
                            alt="social"
                            width="25" />
                        &nbsp;
                                <img src={line}
                            alt="social"
                            width="25" />
                        &nbsp;
                                <img src={twitter}
                            alt="social"
                            width="25" />
                    </div>
                </div>
            </div >
        )
    }
} export default Footer;