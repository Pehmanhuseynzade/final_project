import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes/ROUTES";
import { UserContextProvider } from './context/Usercontext';


const routes = createBrowserRouter(ROUTES);

function App() {
  return (
    <>
    <UserContextProvider>
    <RouterProvider router = {routes}/>
    </UserContextProvider>
    </>
  );
}

export default App;
