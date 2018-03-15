import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';


import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Test.css';


BigCalendar.momentLocalizer(moment);

const Calendar = () => (<div>
  <BigCalendar
    events={{}}
    startAccessor="startDate"
    endAccessor="endDate"
  />
                        </div>);

export default Calendar;
