import React, { useContext } from 'react'
import './EquipDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import EquipItem from '../EquipItem/EquipItem'

const EquipDisplay = ({category}) => {
      const{equip_list}=useContext(StoreContext)
  return (
    <div className='equip-display' id='equip-display'>
      <h2>Equipments near you </h2>
      <div className="equip-display-list">
        {equip_list.map((item,index)=>{
          if(category==="All" || category===item.category){
            return <EquipItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          }
        })}
      </div>
    </div>
  )
}

export default EquipDisplay