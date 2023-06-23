import Userroot from "../pages/User/Userroot"
import Home from "../pages/User/Home"
import About from "../pages/User/About"
import Tour from "../pages/User/Tour"
import Adminroot from "../pages/Admin/Adminroot"
import Main from "../pages/Admin/Main"
import Restaurant from "../pages/User/Restaurant"
import Spa from "../pages/User/Spa"
import Parties from "../pages/User/Parties"
import Media from "../pages/User/Media"
import Rooms from "../pages/User/Rooms"
import Entertainment from "../pages/User/Entertainment"
import Contact from "../pages/User/Contact"
import Login from "../pages/User/Login"
import Homeadmin from "../pages/Admin/Homeadmin"
import Ent from "../pages/Admin/Ent"
import Entimg from "../pages/Admin/Entimg"
import Restaurants from "../pages/Admin/Restaurants"
import Roominfo from "../pages/Admin/Roominfo"
import Spaimages from "../pages/Admin/Spaimages"
import Spainfo from "../pages/Admin/Spainfo"
import Mediainfo from "../pages/Admin/Mediainfo"
import Partiesinfo from "../pages/Admin/Partiesinfo"
import Tourimg from "../pages/Admin/Tourimg"
import Aboutadmin from "../pages/Admin/Aboutadmin"
import Tourinfo from "../pages/Admin/Tourinfo"
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
            },
            {
                path:'entertainment',
                element:<Entertainment/>
            },
            {
                path:'tour',
                element:<Tour/>
            },
            {
                path:'contact',
                element:<Contact/>
            },
            {
                path:'login',
                element:<Login/>
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
            },
            {
                path:'homeadmin',
                element:<Homeadmin/>
            },
            {
                path:'entadmin',
                element:<Ent/>
            },
            {
                path:'entimgadmin',
                element:<Entimg/>
            },
            {
                path:'mediaadmin',
                element:<Mediainfo/>
            },
            {
                path:'partiesimgadmin',
                element:<Partiesinfo/>
            },
            {
                path:'resadmin',
                element:<Restaurants/>
            },
            {
                path:'roominfoadmin',
                element:<Roominfo/>
            },
            {
                path:'roomadmin',
                element:<Rooms/>
            },
            {
                path:'spaimages',
                element:<Spaimages/>
            },
            {
                path:'spainfoadmin',
                element:<Spainfo/>
            },
            {
                path:'tourimgadmin',
                element:<Tourimg/>
            },
            {
                path:'aboutadmin',
                element:<Aboutadmin/>
            },
            {
                path:'touradmin',
                element:<Tourinfo/>
            },
        ] 
    }

]