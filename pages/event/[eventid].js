import { Fragment } from 'react';
import { getEventById } from '../../dummy-data';
import { useRouter } from 'next/dist/client/router';
import EventSummary from '../../components/event-detail/event-summary'
import EventContent from '../../components/event-detail/event-content'
import EventLogistics from '../../components/event-detail/event-logistics'
import ErrorAlert from '../../components/ui/error-alert';
import Button from '../../components/ui/button';
const EventPageID = () => {
 const router = useRouter();
 const id = router.query.eventid;
 const event = getEventById(id);
 if (!event) {

  return (<Fragment>
   <ErrorAlert>

    <p>No Event Found</p>
   </ErrorAlert>
   <div style={{ textAlign: 'center' }}>

    <Button link='/event'>Go Back To Event Page</Button>
   </div>
  </Fragment>)

 }
 return (
  <Fragment>
   <EventSummary title={event.title} />
   <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
   <EventContent>
    <p>{event.description}</p>
   </EventContent>
  </Fragment>

  // <div>
  //  <div><h2>{event.title}</h2></div>
  //  <div>
  //   <img src={event.image} alt={event.title} />
  //  </div>
  //  <div>

  //   <time>

  //    {event.date}
  //   </time>

  //  </div>
  //  <div>
  //   <p>{event.description}</p>
  //  </div>

  //  <div>{event.location}</div>
  // </div>
 )
}

export default EventPageID
