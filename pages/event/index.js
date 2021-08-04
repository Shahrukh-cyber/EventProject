import { Fragment } from 'react';
import EventList from '../../components/events/event-list';
import { getAllEvents } from '../../dummy-data';
import EventSearch from '../../components/events/event-search';
import { useRouter } from 'next/router';

const EventPage = () => {
 const getEvents = getAllEvents();
 const router = useRouter();
 // const a = getEvents[0].title
 // console.log('getEvents', a);
 const FindEventHandlers = (year, month) => {
  console.log('Fyear', year, 'FMonth', month);

  const fullpath = `/event/${year}/${month}`;
  router.push(fullpath);



 }
 return (

  <Fragment>
   <EventSearch onSearch={FindEventHandlers} />
   <EventList items={getEvents} />
  </Fragment>

 )

}




export default EventPage
