import { useHistory } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(data) {
    fetch("https://react-refresh-bbd20-default-rtdb.firebaseio.com/meetups.json", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      history.replace('/');
    });
  };

  return (
    <section>
      <h1>Create New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
