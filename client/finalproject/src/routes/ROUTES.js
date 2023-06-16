import Userroot from "../pages/User/Userroot"
import Home from "../pages/User/Home"
import About from "../pages/User/About"
import Adminroot from "../pages/Admin/Adminroot"
import Main from "../pages/Admin/Main"
import Restaurant from "../pages/User/Restaurant"
import Spa from "../pages/User/Spa"
import Parties from "../pages/User/Parties"
import Media from "../pages/User/Media"
import Rooms from "../pages/User/Rooms"
export const ROUTES = [
    {
        path:'/',
        element:<Userroot/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'about',
                element:<About/>  
            },
            {
                path:'restaurant',
                element:<Restaurant/>
            },
            {
                path:'spa',
                element:<Spa/>
            },
            {
                path:'parties',
                element:<Parties/>
            },
            {
                path:'media',
                element:<Media/>
            },
            {
                path:'rooms',
                element:<Rooms/>
            }
        ]
    },
    {
        path:'/admin',
        element:<Adminroot/>,
        children:[
            {
                path:'',
                element:<Main/>
            }
        ] 
    }

]