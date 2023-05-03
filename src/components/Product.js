import React from 'react'
import {useNavigate} from "react-router-dom"
import { useContext } from 'react';
import AppContext from '../appcontext';

 const Product = (props) => {
    const navigate = useNavigate();
    const { state, setState } = useContext(AppContext);
    const onAddCart=()=>{
        if(state){
            alert("added to cart successfully");
        }
        else{
            navigate('/login');
        }
    }
  return (
 
        <div id="Product">
      <h3>{props.name}</h3>
      <img src={props.imageUrl} alt={props.name}  />
      <div className="align">
      <p >{props.description}</p>
      <p >${props.price}</p>
        </div>
      <div id="addcart">
      <button id="add" onClick={onAddCart}>Add to Cart</button>
      </div>
    </div>
   
  )
}
export default Product;