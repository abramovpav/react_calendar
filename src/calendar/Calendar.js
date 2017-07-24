import React, {Component} from "react";
import CalendarEventEditor from "./CalendarEventEditor/CalendarEventEditor";
import CalendarView from "./CalendarView/CalendarView";
import { Route, Switch, Redirect } from "react-router-dom";

class Calendar extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={this.props.match.url} component={CalendarView}/>
                    <Route path={this.props.match.url + '/edit-event/:year(\\d{4})/:month(\\d{1,2})/:day(\\d{1,2})/:eventId(\\d+)'}
                                component={CalendarEventEditor}/>
                    <Route exact path={this.props.match.url + '/new-event'} component={CalendarEventEditor}/>
                    <Redirect to="/404" />
                </Switch>
            </div>
        );
    }
}

export default Calendar;
