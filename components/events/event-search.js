import React, { useRef } from 'react'
import Button from '../ui/button'
import classes from './event-search.module.css';

const EventSearch = (props) => {
 const InputYearRef = useRef();
 const InputMonthRef = useRef();
 const handlesubmit = (event) => {
  event.preventDefault();
  const selectedMonth = InputMonthRef.current.value;
  const selectedYear = InputYearRef.current.value;
  console.log(selectedYear, selectedMonth)
  props.onSearch(selectedYear, selectedMonth);


 }
 return (
  <form className={classes.form} onSubmit={handlesubmit}>
   <div className={classes.controls}>
    <div className={classes.control}>
     <label htmlFor='year'>Year</label>
     <select id='year' ref={InputYearRef}>
      <option>2021</option>
      <option>2020</option>

     </select>
    </div>
    <div className={classes.control}>

     <label htmlFor='month'>Month</label>
     <select id="month" ref={InputMonthRef}>
      <option value="1">Jan</option>
      <option value="2">Feb</option>
      <option value="3">Mar</option>
      <option value="4">April</option>
      <option value="5">May</option>
      <option value="6">June</option>
      <option value="7">July</option>
      <option value="8">Aug</option>
      <option value="9">Sep</option>
      <option value="10">Oct</option>
      <option value="11">Nov</option>
      <option value="12">Dec</option>
     </select>


    </div>
   </div>
   <Button>Find Events</Button>

  </form>
 )
}

export default EventSearch
