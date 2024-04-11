import React ,{useState}from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import {DummyCardList} from "./DummyCardList";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {
  const { resid } = useParams();
  const resInfo = useRestaurantMenu(resid);
  const [showIndex,setShowIndex] = useState(0) 

  if (resInfo === null) return <DummyCardList />;

  const { info } = resInfo?.cards[2]?.card?.card;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (itemcategory) =>
        itemcategory?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-xl">{info?.name}</h1>

      <p className="font-medium text-sm">
        {info?.cuisines.join(",")} - {info?.costForTwoMessage}
      </p>

      {categories.map((category,index) => (
        <RestaurantCategory key={category?.card?.card?.title} 
        data={category?.card?.card}
        showItems={index===showIndex ? true :false}
        setShowIndex={()=>{
            setShowIndex(index)
        }}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;

/* <li>{info?.avgRating}</li>
        <li>Delivery at {info?.sla?.deliveryTime} minutes</li>
      </ul>
      <ul>
        <li>
          <h3>Menu</h3>
        </li>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            
            {item?.card?.info?.name} - Rs.{item?.card?.info?.price / 100}
          </li>
        ))}
        <li></li>
      </ul>
      <ul>
        <li>
          <h3>Address</h3>
        </li>
        <li>{info?.areaName},</li>
        <li>{info?.city}</li>
        */
