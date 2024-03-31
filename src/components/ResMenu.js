import React from 'react'
import { useEffect,useState } from 'react'
import Shimmer from './Shimmer';
import { RES_MENU } from '../utils/constants';
import { useParams } from 'react-router-dom';
import Recommend from './Recommend';

const ResMenu = () => {
  const[resMenu, setResMenu] = useState(null);
    useEffect(()=>{
        fetchmenu();
    },[]);
    const {resId} = useParams();
    console.log(resId);

    const fetchmenu = async()=>{
        const data = await fetch(RES_MENU+resId);
        const info = await data.json();
        console.log(info);
        setResMenu(info);
    }
    
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
        
   