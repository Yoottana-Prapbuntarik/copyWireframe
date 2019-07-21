import React, { Component } from 'react';
import Cart from './Cart';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSearch, faShoppingCart } from '@fortawesome/fontawesome-free-solid';

class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            scrolling: false,
            scrollYAxis: 30,
            isHover: false,
        }
        this.handleScroll = this.handleScroll.bind(this);
        this.closeNav = this.closeNav.bind(this);
        this.toggle = this.toggle.bind(this);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    closeNav() {
        this.setState({
            isOpen: false,
        })
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll() {
        if (window.scrollY === 0 && this.state.scrolling === true) {
            this.setState({ scrolling: false });
            this.setState({ scrollYAxis: this.state.scrollYAxis + 30 });

        }
        else if (window.scrollY !== 0 && this.state.scrolling !== true) {
            this.setState({ scrolling: true });
            this.setState({ scrollYAxis: this.state.scrollYAxis * 0 + 10 });
        }
    }
    handleMouseHover() {
        this.setState({
            isHover: !this.state.isHover,
        })
    }
    handleMouseUp() {
        this.setState({
            isHover: false,
        })
    }
    render() {
        let alpha = {
            background: '#ffffff'
            , color: '#000000',
            paddingTop: `${this.state.scrollYAxis}px`,
            paddingBottom: `${this.state.scrollYAxis}px`
            , transition: '.1s',
            borderBottom: "1.2px solid rgba(0,0,0,0.1)"
        }
        return (
            <React.Fragment>
                <div>
                    <Navbar className="text-center  fixed-top" light style={alpha} expand="lg">
                        <div style={{ marginLeft: '2%' }}>
                            <Link className="navbar-brand" to="/">Navbar Brand</Link>
                        </div>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <div style={{ marginLeft: '1%' }}>
                                <Nav className="mr-auto" navbar>

                                    <NavItem className="navbarLink">
                                        <NavLink to="/" onClick={this.closeNav}>หน้าหลัก</NavLink>
                                    </NavItem>
                                    <NavItem className="navbarLink">
                                        <NavLink to="/Product" onClick={this.closeNav}>สินค้าทั้งหมด</NavLink>
                                    </NavItem>
                                    <NavItem className="navbarLink">
                                        <NavLink to="/News" onClick={this.closeNav}>สินค้าใหม่</NavLink>
                                    </NavItem>
                                    <NavItem className="navbarLink">
                                        <NavLink to="/Promotion" onClick={this.closeNav}>สินค้าโปรโมชั่น</NavLink>
                                    </NavItem>
                                </Nav>
                            </div>

                        </Collapse>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem className="navbarLink">
                                    <NavLink to="/Member" onClick={this.closeNav}>
                                        <img className="memberImg"
                                            src="data:image/jpeg;base64,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"
                                            alt="icon-member" />
                                    </NavLink>
                                </NavItem>
                                <NavItem className="navbarLink">
                                    <NavLink to="/Member" onClick={this.closeNav}>สวัสดี Tanyaporn</NavLink>
                                </NavItem>
                                <NavItem className="navbarLink">
                                    <NavLink>
                                        <FontAwesomeIcon icon={faSearch}
                                            size="1x"
                                            color="#17a2b8" />
                                    </NavLink>
                                </NavItem>
                                <NavItem className="navbarLink">
                                    <NavLink
                                        to="/Mycart"
                                        onMouseEnter={this.handleMouseHover}
                                        onMouseLeave={this.handleMouseUp}>
                                        <FontAwesomeIcon icon={faShoppingCart}
                                            size="1x"
                                            color="#17a2b8" />
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
                {this.state.isHover && <div className={this.state.isHover ? ('Cart  fadein') : ('')}><Cart buttonName="ไปที่ตระกร้าสินค้า" /></div>}
            </React.Fragment>
        );
    }
}
export default NavigationBar;