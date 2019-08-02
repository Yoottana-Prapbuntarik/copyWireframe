import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShoppingCart, faAddressCard,
    faMap, faMoneyBill
    , faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

import { NavItem, NavLink, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
class Sidebar extends React.Component {
    render() {
        return (
            <div className="col-md-2 col-12">
                {console.log(window.location.pathname)}
                <div className="sidebar">
                    <h3>Bootstrap Sidebar</h3>
                    <div className="side-menu">
                        <Nav vertical className="list-unstyled pb-3">
                            <NavItem> 
                                <NavLink className={ window.location.pathname === '/Member' ? ("text-primary"):('')}  tag={Link} to={'/Member'}>
                                    <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />รายการสั่งซื้อ
                            </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink  className={ window.location.pathname === '/About' ? ("text-primary"):('')}  tag={Link} to={'/About'}>
                                    <FontAwesomeIcon icon={faAddressCard} className="mr-2" />ข้อมูลของฉัน
                            </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={ window.location.pathname === '/Myaddress' ? ("text-primary"):('')} tag={Link} to={'/Myaddress'}>
                                    <FontAwesomeIcon icon={faMap} className="mr-2" />ที่อยู่ของฉัน
                            </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={ window.location.pathname === '/Confirmpayment' ? ("text-primary"):('')}  tag={Link} to={'/Confirmpayment'}>
                                    <FontAwesomeIcon icon={faMoneyBill} className="mr-2" />แจ้งการชำระเงิน
                            </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to={'/logout'}>
                                    <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />ออกจากระบบ
                            </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </div>
            </div>
        )
    }
}
export default Sidebar;