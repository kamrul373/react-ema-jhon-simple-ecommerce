import './App.css';
import Shop from './Components/Shop/Shop';
import Orders from './Components/Orders/Orders';
import Inventory from './Components/Inventory/Inventory';
import About from './Components/About/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import productsCartLoader from './productsCartLoader/productsCartLoader';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>
        },
        {
          path: "shop",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>
        },
        {
          path: "orders",
          loader: productsCartLoader,
          element: <Orders></Orders>
        },
        {
          path: "inventory",
          element: <Inventory></Inventory>
        },
        {
          path: "/about",
          element: <About></About>
        }
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
