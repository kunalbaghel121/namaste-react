import {useState,useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "./utils/mockdata";
import Shimmer from "./Shimmer";



const Body = () => {

  const[searchText,setsearchText] = useState("")

  const [listOfRestaurants,setlistOfRestaurant]= useState([]);  
  const [filteredRestaurants,setfilteredOfRestaurant]= useState([]);  

    useEffect(()=>{
    fetchData();
  },[]);

  const fetchData= async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.67421329999999&lng=77.27715119999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
   
    setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfilteredOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  } 

  // if(listOfRestaurants.length===0){
  //   return <Shimmer/>
  // }

  return listOfRestaurants.length===0 ? <Shimmer/> : (
    <div className="body">

      <div className="search">
        <input type="text" className="search-box" value={searchText} onChange={
          (e)=>{
            setsearchText(e.target.value)

        }} ></input>
        <button className="search-btn" 
        onClick={()=>{

          const filteredlist= listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
          setfilteredOfRestaurant(filteredlist);

        }}
        >search</button>
      </div>

      <div className="filter">
        <button className="filter-btn" onClick={()=>{ 
         const filteredlistOfRestaurants=listOfRestaurants.filter(
            (res)=>res.info.avgRating > 4.0          );
          setlistOfRestaurant(filteredlistOfRestaurants)

        }}

         >
          Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            resData={restaurant}
          ></RestaurantCard>
        ))}
      </div>
    </div>
  );
};

export default Body;
