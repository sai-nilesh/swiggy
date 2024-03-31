import React from "react";
import { CDN_URL } from "../utils/constants";
const RestaurtantCard = (props) =>{
      const {resData} = props;
      const{
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
       
      } = resData?.info;
      
    return (
      <div className="res-card">
               <img className="card-img" src={CDN_URL+cloudinaryImageId }/>
               <h3>{name}</h3>
               <h4>{cuisines.join(", ")}</h4>
               <h4>{avgRating} stars</h4>
               <h4>{costForTwo}</h4>
               <h4>{resData.info.sla.deliveryTime} mins</h4>
              
              
       </div>
    )
}

export default RestaurtantCard;