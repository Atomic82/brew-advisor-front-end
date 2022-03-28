import { useState, useEffect, useRef } from 'react'

const NewReview = (props) => {
  const formElement = useRef()
  const [reviewFormData, setReviewFormData] = useState({})
  const [validForm, setValidForm] = useState(false)

  useEffect(() => {
    formElement.current.checkValidity() ?
    setValidForm(true) : setValidForm(false)
  }, [reviewFormData])

  const handleChange= evt => {
    setReviewFormData({...reviewFormData, [evt.target.name]: evt.target.value})
  }
  const handleSubmit = evt => {
    evt.preventDefault()
    console.log(reviewFormData)
    props.handleAddReview(reviewFormData)
  }


  
  return ( 
    <>
      <h1>My $0.02</h1>
      <div>
      <form onSubmit={handleSubmit} autoComplete='off' ref={formElement}>
        <h2>
          User name goes here
        </h2>
        <h3>
          Brewery goes here
        </h3>
        <label htmlFor="comment">
          Feedback:
        </label>
        <textarea value={reviewFormData.comment} onChange={handleChange} />
        
      </form>

      </div>
    </>
  );
}
 
export default NewReview