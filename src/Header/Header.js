import React, {Component} from "react";
import "./styles.css";
import Clock from "../Clock";

class Header extends Component {

    render() {
        return (
            <div className="header">
                <h1>Welcome to Calendar!</h1>
                <Clock/>
            </div>
        );
    }
}

export default Header;
