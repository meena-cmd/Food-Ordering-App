import { CDN_URL } from "../utils/constants";
import React, { useContext } from 'react'
import UserContext from '../utils/UserContext';


const ResContainer = ({ resdata }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId,sla, aggregatedDiscountInfoV3} =
    resdata?.info;
    const {loggedInUser} = useContext(UserContext)
  return (
    <div
      className="w-52 m-6 p-5"
    >
      <div className="relative ">
      <img className="h-[130px] rounded-lg w-full shadow-xl" src={CDN_URL + cloudinaryImageId} />
        <div className="absolute bottom-0 left-0 right-0">
          <h6 className="text-[13px] text-white  font-bold px-2 py-1">{aggregatedDiscountInfoV3?.header}  {aggregatedDiscountInfoV3?.subHeader}</h6>
        </div>
        </div>
      <h5 className="font-bold text-[14px]">{name}</h5>
      <h6 className="break-words font-light text-[11px]">{cuisines.join(",")}</h6>
      <h6 className="text-[12px]">{costForTwo}</h6>
      <h6 className="text-[12px]">{sla?.deliveryTime} mins</h6>
      <h6 className="text-[12px]">{avgRating}</h6>
      <h6 className="text-[12px]">{loggedInUser}</h6>
      



    </div>
  );
};




export default ResContainer;
