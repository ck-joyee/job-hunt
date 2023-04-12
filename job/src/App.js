import logo from './logo.svg';
import './App.css';
import Main from './components/Layout/Main';
import Home from './components/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Main/>,
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