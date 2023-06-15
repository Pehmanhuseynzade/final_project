import Userroot from "../pages/User/Userroot"
import Home from "../pages/User/Home"
import About from "../pages/User/About"
import Adminroot from "../pages/Admin/Adminroot"
import Main from "../pages/Admin/Main"
import Restaurant from "../pages/User/Restaurant"
import Spa from "../pages/User/Spa"
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