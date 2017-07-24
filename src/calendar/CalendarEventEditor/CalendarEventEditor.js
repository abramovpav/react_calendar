import React, {Component} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { push } from 'react-router-redux';
import getValue from "../../utils/utils";
import Datetime from "react-datetime";
import 'react-datetime/css/react-datetime.css';
import "./styles.css";

class CalendarEventEditor extends Component {
    constructor(props) {
        super(props);
        this.loadEvent = this.loadEvent.bind(this);
        this.state = {
            description: '',
            startTime: null,
            endTime: null
        };

    }

    componentWillMount() {
        this.loadEvent();
    }

    loadEvent() {
        const year = parseInt(this.props.match.params.year, 10);
        const month = parseInt(this.props.match.params.month, 10);
        const day = parseInt(this.props.match.params.day, 10);
        const eventId = parseInt(this.props.match.params.eventId, 10);
        const events = getValue(getValue(getValue(this.props.events, year, {}), month, {}), day, []);
        this.setState({
            ...this.state,
            ...events.filter(event => event.id === eventId)[0]
        });
    }

    changeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    changeStartTime(e) {
        if (typeof e === "string") {
            return;
        }
        this.setState({
            startTime: e.toDate()
        });
    }

    changeEndTime(e) {
        if (typeof e === "string") {
            return;
        }
        this.setState({
            endTime: e.toDate()
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.state.id) {
            this.props.onNewEvent(this.state);
        }
        else {
            this.props.onChangeEvent(this.state);
        }
        this.props.redirectToCalendar()
    }

    render() {

        return (
            <div>
                <h1>Event Editor</h1>
                <form onSubmit={this.handleSubmit.bind(this)} className="event-edit-form">
                    <label htmlFor="startTime"><b>Start Time</b></label>
                    <Datetime value={this.state.startTime} onChange={this.changeStartTime.bind(this)}/>
                    <label htmlFor="endTime"><b>End Time</b></label>
                    <Datetime value={this.state.endTime} onChange={this.changeEndTime.bind(this)}/>
                    <label htmlFor="description"><b>Description</b></label>
                    <div>
                        <input type="text" id="description" name="description" placeholder="Description"
                              onChange={this.changeDescription.bind(this)}
                              value={this.state.description}/>
                    </div>
                    <br />
                    <button type="submit">Save</button>
                </form>

                <br />
                <Link to="/calendar" className="link-calendar">>>> Back to Calendar {'<<<'}</Link>
            </div>

        );
    }
}

export default connect(
    state => ({
        events: state.calendar.events
    }),
    dispatch => ({
        onChangeEvent: (event) => {
            dispatch({type: "UPDATE_EVENT", payload: event})
        },
        onNewEvent: (event) => {
            dispatch({type: "ADD_EVENT", payload: event})
        },
        redirectToCalendar: () => {
            dispatch(push('/calendar'))
        }
    })
)(CalendarEventEditor);