import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/HomePage/Homepage";
import TimeLine from "../pages/Timeline/TimeLine";
import Stats from "../pages/Stats/Stats";

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

            }
        ]
     }
])