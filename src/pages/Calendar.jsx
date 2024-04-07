// import { useState } from "react";
// import { formatDate } from '@fullcalendar/core'
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
// import interactionPlugin from '@fullcalendar/interaction'
// import { Paper, Stack } from "@mui/material";
// import './styles/Calendar.css'

// function renderEventContent(eventInfo) {
//     return (
//       <>
//         <b>{eventInfo.timeText}</b>
//         <i>{eventInfo.event.title}</i>
//       </>
//     )
//   }

  
//   const handleEventClick = (clickInfo) => {
//     if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
//       clickInfo.event.remove()
//     }
//   }

// function renderSidebarEvent(event) {
//     return (
//       <li key={event.id}>
//         <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
//         <i>{event.title}</i>
//       </li>
//     )
//   }
  
// let eventGuid = 0;
// let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today


//   function createEventId() {
//     return String(eventGuid++)
//   }
  
//   const INITIAL_EVENTS = [
//     {
//       id: createEventId(),
//       title: 'All-day event',
//       start: todayStr
//     },
//     {
//       id: createEventId(),
//       title: 'Timed event',
//       start: todayStr + 'T12:00:00'
//     }
//   ]
  

// const Calendar = () => {
//     const [currentEvents , setCurrentEvents] = useState([]);
    
    
//   console.log(currentEvents)
//   const handleDateSelect = (selectInfo) => {
//     let title = prompt('Please enter a new title for your event')
//     let calendarApi = selectInfo.view.calendar

//     calendarApi.unselect() // clear date selection

//     if (title) {
//       calendarApi.addEvent({
//         id: createEventId(),
//         title,
//         start: selectInfo.startStr,
//         end: selectInfo.endStr,
//         allDay: selectInfo.allDay
//       })
//     }
//   }

  
//     const handleEvents = (events) => {
    
//     setCurrentEvents(events)
//   }
  
  

//     return (
//         <Stack direction={'row'} >

//         <Paper className='demo-app-sidebar'>
//           <h2>All Events ({currentEvents.length})</h2>
//           <ul style={{textAlign:"center"}}>
//             {currentEvents.map(renderSidebarEvent)}
//           </ul>
//       </Paper>


//         <div className='demo-app-main'>
//           <FullCalendar
//             plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//             headerToolbar={{
//               left: 'prev,next today',
//               center: 'title',
//               right: 'dayGridMonth,timeGridWeek,timeGridDay'
//             }}
//             initialView='dayGridMonth'
//             editable={true}
//             selectable={true}
//             selectMirror={true}
//             dayMaxEvents={true}
//             weekends={true}
//             initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
//             select={handleDateSelect}
//             eventContent={renderEventContent} // custom render function
//             eventClick={handleEventClick}
//             eventsSet={handleEvents} // called after events are initialized/added/changed/removed
//             /* you can update a remote database when these fire:
//             eventAdd={function(){}}
//             eventChange={function(){}}
//             eventRemove={function(){}}
//             */
//           />
//         </div>

//         </Stack>
//     );
// }

// export default Calendar;



import { useState, useEffect } from "react";
import { formatDate } from '@fullcalendar/core';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Paper, Stack } from "@mui/material";
import './styles/Calendar.css';

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

const handleEventClick = (clickInfo, setCurrentEvents) => {
  if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    clickInfo.event.remove();
    // Update state and save to local storage after removing the event
    setCurrentEvents((prevEvents) => {
      const updatedEvents = prevEvents.filter(event => event.id !== clickInfo.event.id);
      localStorage.setItem('calendarEvents', JSON.stringify(updatedEvents));
      return updatedEvents;
    });
  }
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
      <i>{event.title}</i>
    </li>
  );
}

let eventGuid = 0;

function createEventId() {
  return String(eventGuid++);
}

const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState([]);
  
  useEffect(() => {
      // Load events from local storage on component mount
      const storedEvents = localStorage.getItem('calendarEvents');
    if (storedEvents) {
      setCurrentEvents(JSON.parse(storedEvents));
    }
  }, []);

  const handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event');
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      const newEvent = {
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      };

      // Update state and save to local storage after adding a new event
      setCurrentEvents((prevEvents) => {
        const updatedEvents = [...prevEvents, newEvent];
        localStorage.setItem('calendarEvents', JSON.stringify(updatedEvents));
        return updatedEvents;
      });

      calendarApi.addEvent(newEvent);
    }
  }

  const handleEvents = (events) => {
    setCurrentEvents(events);
  }

  return (
    <Stack direction={'row'}>
      <Paper className='demo-app-sidebar'>
        <h2>All Events ({currentEvents.length})</h2>
        <ul style={{ textAlign: "center" }}>
          {currentEvents.map(renderSidebarEvent)}
        </ul>
      </Paper>

      <div className='demo-app-main'>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          initialView='dayGridMonth'
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={(clickInfo) => handleEventClick(clickInfo, setCurrentEvents)}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          initialEvents={currentEvents} // Load events from state
        />
      </div>
    </Stack>
  );
}

export default Calendar;
