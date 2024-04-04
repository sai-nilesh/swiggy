import React from 'react'
import { useEffect,useState } from 'react'
import Shimmer from './Shimmer';
import { RES_MENU } from '../utils/constants';
import { useParams } from 'react-router-dom';
import Recommend from './Recommend';
import useResMenu from '../utils/useResMenu';

const ResMenu = () => {
  const {resId} = useParams();
   const resMenu = useResMenu(resId);
    
    const item =  resMenu?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    if(resMenu === null) return <Shimmer/>
  return (
    <div>  
        {item.map(info=>
        <li  key = {info.card.info.id }>{info.card.info.name}</li>
         )}    
    </div>
  )
}

export default ResMenu

// [0]?.card?.info?.name
// {item.map(info=>
        
   