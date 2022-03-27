import { useState, useRef, useEffect } from 'react'

const NewEvent = (props) => {
  const [formData, setFormData] = useState({ //Edit this to reflect the event model in the backend if things are added/removed to it
    brewery: '',
    timeDate: '',
  })

  // form is going to be sending the owner(whoever made the event) as well
  return (
    <>
      <h1>This is where a new event form will be.</h1>
    </>
  );
}


export default NewEvent;