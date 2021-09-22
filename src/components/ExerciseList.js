import React from "react";
import Card from "./Card";
import "../css/Card.css"
function ExerciseList(props){

    return(
        <div className="ExerciseList">
        {
               props.exercises.map((exercise)=>{
            return (
             
                               <Card
                               title={exercise.title}
                               description={exercise.description}
                               img={exercise.img}
                               bg={exercise.bg}
                             
                           />
                          
                     
                           )
                       
                       }
                                       )
                   }
       
           </div>
    )
}
export default ExerciseList;