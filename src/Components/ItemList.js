import React from "react";
import { CDN_URL } from "../utils/constants";


const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2 border-black-300 border-b-2 text-left flex justify-between cursor-pointer">
           
            <div className="w-9/12">
                <div className="py-2 font-semibold">
                 <span>{item.card.info.name}</span>
                 <span> - ₹ {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
                 </span>
                </div>
          
              <p className="text-sm">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-2">
              <div className="absolute">
              <button className="bg-gray-200 shadow-lg rounded-lg font-extrabold text-blue-500 w-28 h-7 p-1 mx-2">ADD</button>
              </div>
              <img className="w-full h-36 rounded-lg"
              src={
                CDN_URL +
                item?.card?.info?.imageId
              }
              />
              
            </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
