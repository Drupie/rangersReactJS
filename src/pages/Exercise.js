import React from "react";
import ExerciseList from '../components/ExerciseList'
import Card from "../components/Card";
import Welcome from "../components/Welcome"
class Exercise extends React.Component{
constructor(props){
    super(props)
    this.state={
        data:[{
            "id": 1,
            "title": "Ranger Red",
            "description": "Learn amazing street workout and calisthenics",
            "img": "https://firebasestorage.googleapis.com/v0/b/hackerprojects-63840.appspot.com/o/red.png?alt=media&token=8feea56f-913d-4432-ad44-9136937f23df",
            "bg": "#2c3e50",
            
        },{
            "id": 2,
            "title": "Ranger Pink",
            "description": "Learn the secrets of bodyweight techniques",
            "img": "https://firebasestorage.googleapis.com/v0/b/hackerprojects-63840.appspot.com/o/pink.png?alt=media&token=3cc77e2a-57d7-4126-bb0b-4a578b6c3698",
            "bg": "#34495e",
          
        },{
            "id": 3,
            "title": "Ranger Green",
            "description": "Train anytime, everywere and become a superhero!",
            "img": "https://firebasestorage.googleapis.com/v0/b/hackerprojects-63840.appspot.com/o/green.png?alt=media&token=ea63427d-9ed9-486e-8c1f-e1ae1687578e",
            "bg": "#34495e",
           
        }
        ,{
            "id": 4,
            "title": "Ranger Yellow",
            "description": "Train anytime, everywere and become a superhero!",
            "img": "https://firebasestorage.googleapis.com/v0/b/hackerprojects-63840.appspot.com/o/yellow.png?alt=media&token=c1eb8bb9-9e2b-4346-873f-d0fd0e255581",
            "bg": "#34495e",
           
        },
        ,{
            "id": 5,
            "title": "Ranger Blue",
            "description": "Train anytime, everywere and become a superhero!",
            "img": "https://firebasestorage.googleapis.com/v0/b/hackerprojects-63840.appspot.com/o/blue.png?alt=media&token=00275b57-0031-4df5-a947-8ccd94703b6b",
            "bg": "#34495e",
           
        }  ,{
            "id": 6,
            "title": "Ranger Black",
            "description": "Train anytime, everywere and become a superhero!",
            "img": "https://firebasestorage.googleapis.com/v0/b/hackerprojects-63840.appspot.com/o/black.png?alt=media&token=2bda9565-c798-4947-88c9-802fc6a56fb1",
            "bg": "#34495e",
            
        }
    
    ]
      
    }
}
render(){
return(
   <div>
<Welcome/>
        <ExerciseList
    exercises={this.state.data}
    />

   </div>
       )
    
    
}

}
export default Exercise;