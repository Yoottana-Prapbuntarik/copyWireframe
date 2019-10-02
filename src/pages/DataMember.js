import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
class DataMember extends Component {
    render() {
        return (
            <div className="container-fluid member">
                <div className="row">
                    <Sidebar />
                    <div className="col-md-6 col-12">
                        <h1>ข้อมูลของฉัน</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default DataMember;
