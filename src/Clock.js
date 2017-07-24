import React, {Component} from "react";
import Moment from "./Moment/Moment";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date()
        }
    }

    tick() {
        this.setState({
            currentDate: new Date()
        })
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render() {
        return (<p><Moment date={this.state.currentDate} format="MMM, Do YYYY HH:mm:ss" /></p>);
    }
}

export default Clock;
