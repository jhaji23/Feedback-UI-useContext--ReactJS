import { createContext,useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext=createContext();

export const FeedbackProvider=({children})=>{

    const[feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit:false
    })

    const editFeedback=(item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    const [data,setData]=useState([
        {
            id:1,
            text:'this is from fd1',
            rating:10
        }, {
            id:2,
            text:'this is from fd2',
            rating:5
        }, {
            id:3,
            text:'this is from fd3',
            rating:6
        }
    ])
    const deleteFeedback = (id) => {
        setData(data.filter((item) => item.id !== id));
      };

      const updateFeedback=(id,updItem)=>{
          setData(data.map((item)=>item.id===id?{
              ...item,...updItem}:item))

      }

      const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
    
        setData([newFeedback, ...data]);
      };
    

    return <FeedbackContext.Provider value={{
        data,
        setData,
        deleteFeedback,
        addFeedback,
        editFeedback, // this is the function 
        feedbackEdit,  //this hold the item in the boolean
        updateFeedback
        
      
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext
