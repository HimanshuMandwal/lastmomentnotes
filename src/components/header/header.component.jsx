import React from 'react';
import { Link } from 'react-scroll';
import CustomButton from '../custom-button/custom-button.component';
import './header.styles.scss';


class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            smooth: true,
            duration: 500,
            clicked: false,
        }
    }
    handleclick = () => {
        this.setState({clicked : !this.state.clicked});
    }
    render() {
        return (
            <nav className="navbar-item">
                <h1 className="nav-logo">.lastMomentNotes</h1>
                <div className="menu-icon" onClick={this.handleclick}>
                <i className={this.state.clicked ? "fas fa-times" :"fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ?"nav-menu active" : "nav-menu"}>
                    <li><Link className="options" to="home" smooth={ this.state.smooth } duration={this.state.duration }> HOME </Link></li>
                    <li><Link className="options" to="academics" smooth={ this.state.smooth } duration={this.state.duration } > ACADEMICS</Link></li>
                    <li><Link className="options" to="why-us" smooth={ this.state.smooth } duration={this.state.duration }> WHY US</Link></li>
                    <li><Link className="options" to="about-us"  smooth={ this.state.smooth } duration={this.state.duration } > ABOUT US </Link></li>
                    <li><Link className="options" to="contact-us"  smooth={ this.state.smooth } duration={this.state.duration } > CONTACT US </Link></li>
                    <li><Link className="options-mobile" to="contact-us"  smooth={ this.state.smooth } duration={this.state.duration } > SIGN UP </Link></li>
                </ul>
                <CustomButton id="button">Sign Up</CustomButton>
            </nav>
        );
    }
}

export default Header; //creating a heigher order component using connect function