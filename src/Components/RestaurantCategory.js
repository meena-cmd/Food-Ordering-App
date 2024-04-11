import ItemList from "./ItemList";
import React, { useState } from 'react'



const RestaurantCategory = ({ data , showItems , setShowIndex}) => {

  const handleclick=()=>{
    setShowIndex();
    
  }
  return (
    <div>
      <div className="p-3 w-6/12 mx-auto my-4 bg-gray-100 shadow-lg" onClick={handleclick}>
        <div className="flex justify-between cursor-pointer">
        <span className="text-sm font-extrabold">
          {data?.title}({data?.itemCards?.length})
        </span>
        <span>🔻</span>
        </div>{showItems &&
        <ItemList 
      items={data?.itemCards}
      />}
      
      </div>

      
    </div>
  );
};
export default RestaurantCategory;
