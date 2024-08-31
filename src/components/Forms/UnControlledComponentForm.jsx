import React, { useRef } from 'react';

function UnControlledComponentForm() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${nameRef.current.value}, Email: ${emailRef.current.value}`);
  };

  return (
    <>
    <h2>Uncontrolled Component Form</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" ref={nameRef} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" ref={emailRef} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default UnControlledComponentForm;
