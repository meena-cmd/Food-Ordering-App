import React,{ useState, useEffect,useContext } from "react";
import ResContainer from "./Restaurant";
import {DummyCardList} from "./DummyCardList";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RES_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

//*whenever state variables update,react triggers a reconciliation cycle(re-renders the component)
const Body = () => {
  const [resList, setResList] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);

  const [inputFilter, setInputFilter] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_URL);

    const json = await data.json();

    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>you are lost in your network</h1>;
  }
  
const {loggedInUser,setUserName} = useContext(UserContext)

  return resList.length === 0 ? 
    <DummyCardList />
   : (
    <div className="flex flex-wrap">
      <div className="p-2">
        <input
          className="border-2 border-solid border-gray-500 rounded-sm p-1 m-4 bg-gray-100 h-7"
          type="text"
          placeholder="Type Restaurant"
          value={inputFilter}
          onChange={(e) => {
            setInputFilter(e.target.value);
          }}
        />
        <button
          className="border border-solid border-gray-400 rounded-sm m-2 bg-gray-100 font-medium"
          onClick={() => {
            const filterrestaurant = resList?.filter((res) =>
              res?.info?.name.toLowerCase().includes(inputFilter.toLowerCase())
            );
            setFilterRestaurant(filterrestaurant);
          }}
        >
          Search
        </button>
        <button
          className="flex flex-col ml-4 border border-gray-400 bg-blue-200 rounded-md font-medium"
          onClick={() => {
            const filtered = resList?.filter(
              (res) => res?.info?.avgRating > 4.3
            );
            setFilterRestaurant(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
        <input type="text" value={loggedInUser} onChange={(e)=>
            setUserName(e.target.value)
        } className="border border-black m-2 px-2"/>
      </div>
      

      <div className="flex flex-wrap justify-center">
        {filterRestaurant?.map((data) => (
          <Link key={data?.info?.id} to={"/restaurant/" + data?.info?.id}><ResContainer resdata={data} /></Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
