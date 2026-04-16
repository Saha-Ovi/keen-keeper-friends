import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/HomePage/Homepage";
import TimeLine from "../pages/Timeline/TimeLine";
import Stats from "../pages/Stats/Stats";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";

export const router = createBrowserRouter([
     {
        path:"/",
        Component:MainLayout,
        children:[
            {
                index:true,
                Component:Homepage
            },
            {
                path:'/timeline',
                Component:TimeLine
            },
            { 
                path:"/stats",
                Component:Stats

            },
            {
                path:"/details/:id",
                Component:DetailsPage,
                loader:()=>fetch("/friends.json").then(res=>res.json())
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
     }
])