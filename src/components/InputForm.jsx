import React from 'react'
import Card from './shared/Card'
import {useState,useEffect} from 'react'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import {useContext} from 'react'
import FeedbackContext from "../Context/FeedbackContext";


function InputForm() {
  const{addFeedback,feedbackEdit,updateFeedback}=useContext(FeedbackContext)
  
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setIsDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

    const[text,setText]=useState("");
    const[isDisabled,setIsDisabled]=useState(true);
    const[msg,setMsg]=useState("")

    const[rating,setRating]=useState(10);
    

    const handleTextChange=(e)=>{
        if(text===''){
            setIsDisabled(true);
            setMsg(null);
        }else if( text!=='' && text.trim().length<10){
          setIsDisabled(true);
          setMsg('review must be atleast 10 characters')
        }else{
          setMsg(null);
          setIsDisabled(false);

        }
        setText(e.target.value);
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      if(text.trim().length>10){
        const newFeedback = {
          text,
          rating,
        };

        if(feedbackEdit.edit===true){
          updateFeedback(feedbackEdit.item.id,newFeedback)
        }else{
          addFeedback(newFeedback)

        }

        
        setText("");
      }
    }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate us?</h2>
        <RatingSelect select={rating=>setRating(rating)}/>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review..."
            value={text}
          />
          <Button type="submit" isDisabled={isDisabled}> Send</Button>
        </div>
        {msg && <div className='message'>{msg}</div>}
      </form>
    </Card>
  );
}

export default InputForm