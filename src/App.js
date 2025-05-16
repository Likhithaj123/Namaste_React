import React , {lazy, Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Outlet, createBrowserRouter, RouterProvider, useResolvedPath } from "react-router-dom";
  import Grocery from "./components/Grocery";
  import "../index.css";
import { useEffect } from "react";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "./components/Cart";



const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));



const AppLayout = () => {

  const [userName, setUserName] = useState();

useEffect(() => {

  const data ={
    name: "Likhitha J"
  };
  setUserName(data.name);
  
},[])

 return (
  <Provider store={appStore}>
  <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    <div className="app">
      <Header/>
      <Outlet/>
     
    </div>
    </UserContext.Provider>
  </Provider>
 );
};

const appRouter = createBrowserRouter([
  {
    path: "/", 
    element: <AppLayout/>,
    children: [
      {
        path: "/",
         element: <Body/>,
     
       },
      {
        path: "/about",
         element: <About/>,
     
       },
       {
         path: "/contact",
          element: <Contact/>,
      
        },
        {
          path: "/grocery",
           element: <Suspense><Grocery/></Suspense>,
       
         },
        {
         
           path: "/restaurants/:resId",
           element : <RestaurantMenu/>,

        },

         {
         
           path: "/cart",
           element : <Cart/>,

        },


    ],
    errorElement: <Error/>,
  },
 

],
{
  future: {
    v7_relativeSplatPath: true,
    v7_startTransition: true, 
  }
},

);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider  router={appRouter}/>);


