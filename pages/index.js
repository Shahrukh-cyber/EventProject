import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import { getFeaturedEvents } from '../dummy-data';
import { useEffect } from 'react';
import EventList from '../components/events/event-list';

export default function Home() {
  return (
    <div >

      <EventList items={getFeaturedEvents()} />

    </div>
  )
}
