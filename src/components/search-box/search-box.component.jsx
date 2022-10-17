/* import { Component } from "react"; */
import './search-box.styles.css'
/*  class SearchBox extends Component{
     render(){
        const { className, placeholder, onChnageHandler} = this.props;
         return (
            <input 
            className={`${className} search-box`}
            type='search'
            placeholder={placeholder}
            onChange={onChnageHandler}
            />
         )
     }
 } */

 const SearchBox = ({ className, placeholder, onChnageHandler}) => (
    <input 
    className={`${className} search-box`}
    type='search'
    placeholder={placeholder}
    onChange={onChnageHandler}
    />
 );

 export default SearchBox;