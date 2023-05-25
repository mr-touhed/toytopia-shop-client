import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import ViewDetails from "../Pages/DetailsPage/ViewDetails";
import PrivetRouter from "../PrivetRouter/PrivetRouter";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddedToys from "../Pages/AddedToys/AddedToys";
import MyToys from "../Pages/MyToys/MyToys";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllToys from "../Pages/AllToys/AllToys";
import EditToys from "../Pages/EditProducts/EditToys";
import BlogPage from "../Pages/BlogPage/BlogPage";


const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path:"/alltoys",
                element: <AllToys/>,
                loader: () => fetch('https://toytopia-shop-server.vercel.app/totalProduct')
            },
            {
                path:"/toys/:id",
                element: <PrivetRouter><ViewDetails/></PrivetRouter> ,
                loader: ({params}) => fetch(`https://toytopia-shop-server.vercel.app/toys/${params.id}`)
            },
            {
                path: "/addtoys",
                element: <AddedToys/>
            },
            {
                path:"/edit/:id",
                element: <EditToys/>,
                loader: ({params}) => fetch(`https://toytopia-shop-server.vercel.app/toys/${params.id}`)
            },
            {
                path: "/mytoys",
                element: <MyToys/>
            },  
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path:"/blog",
                element: <BlogPage/>
            }
            
        ]
        
    },
    {
        path:"*",
        element: <ErrorPage/>
    }
])

export default router