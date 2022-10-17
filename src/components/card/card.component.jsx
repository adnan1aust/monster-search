/* import { Component } from "react"; */
import './card.styles.css';

/* class Card extends Component{
    render(){
        const {name, id, email} = this.props.monster;
        return(        
        <div className="card-container">
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=150x150`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>)
    }
} */

const Card = ({monster: {name, id, email }}) => (        
    <div className="card-container">
        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=150x150`}/>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
)

export default Card;