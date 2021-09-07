import { useState, useEffect } from 'react';

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ meetups, setMeetups ] = useState([]);

  useEffect(() => {
    fetch(
      "https://react-refresh-bbd20-default-rtdb.firebaseio.com/meetups.json"
    )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const meetupList = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };

        meetupList.push(meetup);
      }

      setIsLoading(false);
      setMeetups(meetupList);
    });
  }, []);

  if(isLoading) {
    return (
      <section><p>Loading...</p></section>
    );
  }

  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </div>
  );
}

export default AllMeetupsPage;
