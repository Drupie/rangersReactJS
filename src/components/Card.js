import React from "react";
import "../css/Card.css"
import {Link} from 'react-router-dom'
 
class Card extends React.Component
{

    render(){
       return(
   
        <div className="container">
            <section className="ranger"
            style={{
                background:`${this.props.bg}`,
                width:"200px",
                height:"200px",
                marginLeft:"10px",
                display:"flex",
                marginBottom:"100px",
                justifyContent:"center"
                

            }}
            >

                <h1>{this.props.title}</h1>
                <img src={this.props.img}/>
                <Link to="/exercise/new" className="btn"> View More</Link>
            </section>
        </div>
   
     
       )
    }
}
export default Card;