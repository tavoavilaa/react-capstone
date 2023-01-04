import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import OrderPage from './pages/OrderPage';
import LoginPage from './pages/LoginPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <HomePage />
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/booking",
      element: <BookingPage />,
    },
    {
      path: "/menu",
      element: <MenuPage />,
    },
    {
      path: "/order",
      element: <OrderPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },

  ]);
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
