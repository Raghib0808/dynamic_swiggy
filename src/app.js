import ReactDOM from "react-dom/client"
import React, { lazy, Suspense } from "react"
import { useState, useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About.js";
import ContactUs from "./components/ContactUs.js";
import Error from "./components/Error.js";
import Nav_bar from "./components/Nav_bar.js";
import Body from "./components/Body.js";
import Menu from "./components/Menu.js";
import Profile from "./components/Profile.js";
import Testing from "./components/TESTING_PAGE.js";
import Shimmer from "./components/Shimmer.js";
import { Provider } from "react-redux";
import appStore from "./Utility/appstore_redux.js";
import Cart from "./components/Cart.js";

// import Grocery from "./components/Grocery.js";


// parcel => babel => into react.createElement
// react element



const Grocery = lazy(() => import("./components/Grocery.js"));


const Website=()=>{


   useEffect(()=>{
    fetchData()
    console.log("useEffect alled");
  },[])
 let rag;
  const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json=await(data).json()   

    // rag=json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
 }
  
  
    return(
    <div>
      {/* USING REDUX */}
       <Provider store={appStore}>  {/*declaring redux provider */}

         <Nav_bar/>
         {/* <Just/>  */}
         <Outlet/>
       
      </Provider>
    </div>
      )
    }

const appRouter=createBrowserRouter([
   {
    path:"/",
    element: <Website/>,
    children:[
      {
        path:"/",
        element:<Body />
      },
      {
      path:"/about",
      element:<About />
     },{
      path:"/contact",
      element:<ContactUs />
     },
     {
      path:'/profile',
      element:<Profile/>
     },
     {
      path:'/food',
      element:<Testing/>
     },
     {
      path:"/restaurants/:Id",
      element:<Menu/>
     },{
      path:"/grocery",
      element:<Suspense fallback={<h1>loading....</h1>}><Grocery/></Suspense> 
     },{
      path:"/cart",
      element:<Cart />
     }
    ],
    errorElement:<Error/>
   },
 
])


const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)
