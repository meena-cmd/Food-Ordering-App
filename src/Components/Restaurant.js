import {CDN_URL} from "../utils/constants"

const ResContainer=({resdata})=>{
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId}=resdata?.info
     return (
    
            <div className="rounded-lg bg-slate-400 w-52 m-6 p-4" style={{background:"#f0f0f0"}}>
                <img className="w-52 h-40 rounded-lg" src={CDN_URL + cloudinaryImageId}/>
                <h5 className="font-bold">{name}</h5>
                <h6 className="break-words font-light text-xs">{cuisines.join(',')}</h6>
                <h6>{costForTwo}</h6>
                <h6>{resdata?.info?.sla?.deliveryTime} mins</h6>
                <h6>{avgRating}</h6>    

            </div>
             )
    }

export default ResContainer;






