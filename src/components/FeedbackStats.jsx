import React from 'react'
import {useContext} from 'react'
import FeedbackContext from "../Context/FeedbackContext";

function FeedbackStats() {
    // const avg=(a)=>{
    //   for (let i = 0; i < data.length; i++) {
    //     a += data[i].rating;
    //   }
    //   return Math.floor(a / data.length) ;
    // }
    const{data}=useContext(FeedbackContext)

    let average=data.reduce((acc,curr)=>{

        return acc+curr.rating;
    },0)/data.length;

    average=average.toFixed(1);
  return (
    <div className="feedback-stats">
      <h4>{data.length} Reviews</h4>
      <h4>Average Rating: { isNaN(average)? 0: average} </h4>
    </div>
  );
}

export default FeedbackStats