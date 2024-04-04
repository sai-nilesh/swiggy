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
      <div className=" m-4 p-4   bg-gray-100 hover:bg-gray-200 ">
               <img className="w-60 h-64" src={CDN_URL+cloudinaryImageId }/>
               <h3 className="font-bold" >{name}</h3>
               <h4 className="max-w-52" >{cuisines.join(", ")}</h4>
               <h4>{avgRating} stars</h4>
               <h4>{costForTwo}</h4>
               <h4>{resData.info.sla.deliveryTime} mins</h4>
              
              
       </div>
    )
}

export default RestaurtantCard;