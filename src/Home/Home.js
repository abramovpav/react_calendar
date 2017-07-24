import React, {Component} from "react";
import {Link} from 'react-router-dom';
import "./styles.css";

class Home extends Component {

    render() {
        return (
            <div className="home-container">
                <Link to="/calendar" className="link-calendar">>>> Calendar {'<<<'}</Link>
            </div>
        );
    }
}

export default Home;
