import classes from './event-item.module.css';
import Button from '../ui/button';
import DateIcon from '../icons/date';
import AddressIcon from '../icons/location';
import RightIcon from '../icons/right-arrow';

const EventItem = (props) => {

 const { title, image, date, location, id } = props;

 const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',

 })
 const formattedAddress = location.replace(', ', '\n');
 const exploreEvent = `/event/${id}`



 return (

  <li className={classes.item}>
   <img src={image} alt={title} />
   <div className={classes.content}>
    <div className={classes.summary}>
     <h2>{title}</h2>
     <div className={classes.date}>
      <DateIcon />
      <time>{humanReadableDate}</time>
     </div>
     <div className={classes.address}>
      <AddressIcon />
      <address>{formattedAddress}</address>

     </div>
    </div>
    <div className={classes.actions}>

     <Button link={exploreEvent}>
      <span>
       Explore Event
      </span>
      <span className={classes.icon}>
       <RightIcon />
      </span>
     </Button>



     {/* <Link href={exploreEvent}></Link> */}
    </div>
   </div>
  </li>

 )
}

export default EventItem
