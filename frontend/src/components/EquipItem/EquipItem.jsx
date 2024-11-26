import React, { useContext } from 'react'
import './EquipItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const EquipItem = ({id,name,price,description,image}) => {

    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

  return (
    <div className='equip-item'>
       <div className="equip-item-img-container">
        <img classNme='equip-item-image' src={url+"/images/"+image} alt="" /> 
        {!cartItems[id]
           ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
           :<div  className='equip-item-counter'>
               <img onClick={()=>removeFromCart(id)} src={assets.remove_icon} alt="" />
               <p>{cartItems[id]}</p>
               <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
               
            </div>
        }
       </div>

       <div className="equip-item-info">
         <div className="equip-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
         </div>
         <p className="equip-item-descr">{description}</p>
         <p className="equip-item-price">₹{price}</p>
       </div>
    </div>
  )
}

export default EquipItem