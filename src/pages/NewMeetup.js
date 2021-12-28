import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const onAddMeetup = (meetupData) => {
    fetch(
      'https://react-meetup-app-6c0a6-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </section>
  );
};

export default NewMeetupPage;
