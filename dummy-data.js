const DUMMY_EVENTS = [
 {
  id: 'e1',
  title: 'Programming for everyone',
  description:
   'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
  location: 'Somestreet 25, 12345 San Somewhereo',
  date: '2021-05-12',
  image: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdlZGRpbmclMjBldmVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  isFeatured: false,
 },
 {
  id: 'e2',
  title: 'Networking for introverts',
  description:
   "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
  location: 'New Wall Street 5, 98765 New Work',
  date: '2021-05-30',
  image: 'https://images.unsplash.com/photo-1521961835394-3ffc4d600e40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnRzcGhvdG9ncmFwaHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  isFeatured: true,
 },
 {
  id: 'e3',
  title: 'Networking for extroverts',
  description:
   'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
  location: 'My Street 12, 10115 Broke City',
  date: '2022-04-10',
  image: 'https://images.unsplash.com/photo-1569863959165-56dae551d4fc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGV2ZW50c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  isFeatured: true,
 },
];

export function getFeaturedEvents() {
 return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
 return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
 const { year, month } = dateFilter;
 console.log('year', year, 'month', month);

 let filteredEvents = DUMMY_EVENTS.filter((event) => {
  const eventDate = new Date(event.date);
  return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
 });

 return filteredEvents;
}

export function getEventById(id) {
 return DUMMY_EVENTS.find((event) => event.id === id);
}