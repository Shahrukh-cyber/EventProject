import EventItem from "./event-item";
import classes from './event-list.module.css';
const EventList = (props) => {
 const { items } = props;
 return (
  <div className={classes.list}>
   <ul>
    {items.map(e => (
     <EventItem key={e.id} {...e} />
    ))}
   </ul>
  </div>
 )
}

export default EventList
