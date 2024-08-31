

const EventHandler = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submission prevented.');
  };
  
  return (
    <>

    <h1>Event Handler</h1>

    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default EventHandler;
