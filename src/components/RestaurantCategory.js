import ItemList from "./ItemList";
import { useState } from "react";

const  RestaurantCategory = ({ data, showItems, setShowIndex , dummy}) => {
    console.log(data);

  

    const handleClick = () => {
      setShowIndex();
      
    // setShowItems(!showItems);
    }

    return (
    <div>
        
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 m-2 ">
      
      <div className="flex justify-between items-center cursor-pointer" onClick={handleClick}> 
      <span className="font-bold text-lg">{data.title}   </span>
      {/* {{ data.itemCards.length }} */}
     
      <span>⏬</span>
      </div>

      { showItems && < ItemList items={data.itemCards} dummy={dummy}/>}
      </div>

    
    </div>
    );
};

export default RestaurantCategory;

