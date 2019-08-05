import React, { Component } from 'react'
import Sidebar from '../components/Sidebar';
import Orders from '../components/Orders';
class Member extends Component {
    render() {
        return (
            <div className="container-fluid member">
                    <div className="row">
                        <Sidebar/>
                        <div className="col-md-6 col-12">
                            <Orders/>
                        </div>
                </div>
            </div>
        )
    }
}

export default Member;
