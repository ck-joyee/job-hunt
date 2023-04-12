import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import Main from "./Components/Layout/Main";
import Allfeatured from "./Components/Pages/Featured/Allfeatured";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Main/>,
    },
    {
      path: '/allfeatured',
      element:<Allfeatured/>,
    },
       {
        path: "home",
        element:<Home/>,
      },
    ]);
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;