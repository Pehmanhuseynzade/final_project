import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes/ROUTES";
import { UserContextProvider } from './context/Usercontext';
import { MarxalContextProvider } from './context/usercontextsite';



const routes = createBrowserRouter(ROUTES);

function App() {
  return (
    <>
    <MarxalContextProvider>
    <UserContextProvider>
    <RouterProvider router = {routes}/>
    </UserContextProvider>
    </MarxalContextProvider>
    </>
  );
}

export default App;
