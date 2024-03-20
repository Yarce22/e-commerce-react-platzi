import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context/Context";
import Home from '../Home/Home';
import MyAccount from '../MyAccount/MyAccount';
import MyOrder from '../MyOrder/MyOrder';
import MyOrders from '../MyOrders/MyOrders';
import SignIn from '../SignIn/SignIn';
import NotFound from '../NotFound/NotFound';
import Navbar from "../../Components/Navbar/Navbar";
import './App.css';
import CheckoutSideMenu from "../../Components/CheckoutSideMenu/CheckoutSideMenu";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes;
}

const App = () => {
  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <AppRoutes />
          <Navbar />
          <CheckoutSideMenu />
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
