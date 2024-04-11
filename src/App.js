import React, { lazy,Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import {DummyCardList} from "./Components/DummyCardList";
//  import Grocery from "./Components/Grocery";
import './index.css'
import UserContext from "./utils/UserContext";



const Grocery = lazy(()=>import("./Components/Grocery"))
const About = lazy(()=>import("./Components/About"))

const AppLayout = () => {
  const [userName,setUserName] = useState();
  useEffect(()=>{
    const data= {
      name:""
    }
    setUserName(data.name)
  },[])
  return (
    <UserContext.Provider value={{loggedInUser:userName , setUserName}}>
    <div className="App">
      <Header />

      <Outlet />
    </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<div><DummyCardList/></div>}><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element:<Suspense fallback={<h1><DummyCardList/></h1>}><Grocery /></Suspense> ,
      },
      {
        path: "/restaurant/:resid",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
