import { Fragment } from 'react';
import { getFilteredEvents } from '../../dummy-data'
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import { useRouter } from 'next/dist/client/router';
import ErrorAlert from '../../components/ui/error-alert'
import Button from '../../components/ui/button';
const FilteredEventsPage = () => {

 const router = useRouter();
 const filterDate = router.query.slug;


 console.log(filterDate);

 if (!filterDate) {
  return <h1>Loading....</h1>

 }

 const filterYear = filterDate[0];
 const filterMonth = filterDate[1];

 const numYear = +filterYear;
 const numMonth = +filterMonth;
 debugger;

 if (isNaN(numYear) || isNaN(numMonth) || numMonth > 12 || numMonth < 1 || numYear > 2030 || numYear < 2019) {

  return <Fragment>
   <ErrorAlert>
    <p>Invalid Filter . Please Check you Input Values</p>

   </ErrorAlert>
   <div style={{ textAlign: 'center' }}>
    <Button link='/event'>Go Back To Event</Button>

   </div>
  </Fragment>

 }
 const filterEvents = getFilteredEvents({
  year: numYear,
  month: numMonth,

 });
 if (!filterEvents || filterEvents.length === 0) {

  return <Fragment>
   <ErrorAlert>

    <p> No Event Found For the Choosen Filter!</p>
   </ErrorAlert>
   <div style={{ textAlign: 'center' }}>
    <Button link='/event'>Show All Events</Button>

   </div>
  </Fragment>
 }

 console.log(filterEvents);
 const date = new Date(numYear, numMonth - 1);
 return (
  <Fragment>
   <ResultsTitle date={date} />
   <EventList items={filterEvents} />

  </Fragment>
 )





}

export default FilteredEventsPage
