
import { useEffect, useState, useContext } from "react";
import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants]  = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);


  
    useEffect(() => {
      // getRestaurantList();
      fetchData();
    },[]);


   

const fetchData = async () => {
  try {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9979891&lng=77.55048529999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("Fetched JSON:", json);

    const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    if (restaurants) {
      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } else {
      console.warn("Could not find restaurant data. Swiggy may have updated their structure.");
    }
  } catch (err) {
    console.error( "Fetch failed:", err);
  }
};


  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div className="offline-container">
        <h1>Looks like you are offline. Please check your internet connection.</h1>
      </div>
    );
  };
  
  const { loggedInUser, setUserName } = useContext(UserContext);


    return listOfRestaurants.length === 0 ?
     ( <Shimmer/> 

     ): (
          <div className="Body">
             <div className="filter flex">
              <div className="search m-4 p-4 bg-pink-50 ">
                <input type="text"  className="search-box border  border-solid border-black" 
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value)}}
                
                />
             
           <button className="search-btn bg-green-100 px-3 py-2 m-2 rounded-4xl border border-solid border-black"
                onClick={() => {
                const filteredRestaurant = listOfRestaurants.filter((res) =>
                 res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
  setFilteredRestaurants(filteredRestaurant);
}}>
  Search
            </button>
         </div>
     <div className="filter-btns flex m-4 p-4 bg-pink-50"> 
          <button 
             className="px-3 py-2 m-2 bg-green-100 rounded-4xl border border-solid border-black" 
             onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurants(filteredList);
              
             }}>
             Top Rated Restaurants
          </button>

           <label> UserName :  </label>
        <input type="text" className="search-box border  border-solid border-black" 
        value={loggedInUser}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        />

      </div>
           
              </div>
             <div className="flex flex-wrap justify-center">
               {
                 filteredRestaurants.map((restaurant) => (
                   <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}>
                     
                     {restaurant.info.promoted ? (<RestaurantCardPromoted  resData={restaurant}/> ):(  <RestaurantCard resData={restaurant?.info}  /> )

                     }
                   </Link>
                 )
              
                )
               }
               

             </div>
 


          </div>

    )
}

export default Body;