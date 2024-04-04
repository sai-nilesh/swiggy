import RestaurtantCard from "./RestaurtantCard";
import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body =  () =>{

const [ListOfRes,setListOfRes] = useState([]);
const [FilterRes,setFilterRes] = useState([]);




const [searchVal, setSearchVal] = useState("");


useEffect(()=>{
  fetchData();
},[]);


const fetchData = async()=>{
 const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
 const json = await data.json();
//  console.log(json);
  setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
?.restaurants);
 setFilterRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
  ?.restaurants);
};


const onlineStatus = useOnlineStatus();
console.log(ListOfRes);

if(onlineStatus === false)  return( <h1> Looks like you are offline!! Please check the internet connection</h1> )

  if(ListOfRes.length === 0){
     return <Shimmer/>
  }
    return(
    
     <div className="body">
       <div>
        <div className="search">
          <input type="test"
            value={searchVal} 
            onChange={(e)=>{
            setSearchVal(e.target.value);
            }} />
          <button onClick={()=>{
            // console.log(searchVal);
            const filteredres =  ListOfRes.filter(
              (res)=>res.info.name.toLowerCase().includes(searchVal.toLowerCase()) 
            );
            setFilterRes(filteredres);
           
            // searchVal.info.name === value ? console.log("yes") : console.log("No");
          }}>Search</button>

        </div>
       <div className="filter">
            <button onClick={() =>{ 
                const filteredList = ListOfRes.filter(
                    (res)=> res.info.avgRating > 4
                );
                setListOfRes(filteredList);
            }
                
            }>Top restaurant chains in Hyderabad</button>
        </div>
       </div>
        <div className="  flex flex-wrap" >
          {FilterRes.map((restaurent) =>(
          
            <Link to={"/resturants/"+restaurent.info.id} key = {restaurent.info.id}  ><RestaurtantCard resData={restaurent} /></Link>
            
          ))}
        

        </div>
       
     </div>
    )
}

export default Body;