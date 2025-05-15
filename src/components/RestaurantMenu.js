
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  
  const { resId } = useParams();

const dummy= "Dummy Data";

  const resInfo = useRestaurantMenu(resId);

const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

 
  const restaurantInfoCard = resInfo?.cards?.find(
    (card) => card?.card?.card?.info
  );

  const { name, cuisines, costForTwo } = restaurantInfoCard?.card?.card?.info || {};



        const categories = resInfo?.cards
        ?.find((card) => card?.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c)=>
             c.card?.card?.["@type"] === 
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        
        //console.log(categories);
        console.log(categories.map(c => c?.card?.card?.id));


  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <p className="font-bold  mb-5">
        {cuisines.join(", ")} - {costForTwo}
      </p>
      <h2 className="text-xl font-semibold mb-2">Menu Categories Accordion</h2>
      {categories && categories.map((category,index) => (
        <RestaurantCategory data= {category?.card?.card} 
        key={category?.card?.card.title || index} 
         showItems={index === showIndex ? true : false}
         setShowIndex= {() => {
          setShowIndex(index)}}
          dummy={dummy}
         />
       
        
        ))}
    </div>
  );


};

export default RestaurantMenu;




