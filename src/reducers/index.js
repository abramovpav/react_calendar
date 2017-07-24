import { combineReducers } from "redux";
import calendarReducer from "../calendar/reducers";

import { routerReducer } from 'react-router-redux';

export default combineReducers({
    calendar: calendarReducer,
    router: routerReducer
});