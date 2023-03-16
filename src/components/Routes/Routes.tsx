import { useRoutes } from "react-router-dom";
import AddClientPage from "../../pages/AddClientPage/AddClientPage";
import AddOrderPage from "../../pages/AddOrderPage/AddOrderPage";
import ClientPage from "../../pages/ClientPage/ClientPage";
import ClientsPage from "../../pages/ClientsPage/ClientsPage";
import EditClientPage from "../../pages/EditClientPage/EditClientPage";
// import InvoicesPage from "../../pages/InvoicesPage/InvoicesPage";
import MainPage from "../../pages/MainPage/MainPage";
import OrderPage from "../../pages/OrderPage/OrderPage";
import OrdersPage from "../../pages/OrdersPage/OrdersPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";

const Routes = () => {
  return useRoutes([
    { path: "/", element: <MainPage /> },
    { path: "/clients", element: <ClientsPage /> },
    { path: "/clients/add", element: <AddClientPage /> },
    { path: `/clients/:id`, element: <ClientPage /> },
    { path: "/clients/:id/edit", element: <EditClientPage /> },
    { path: "/orders", element: <OrdersPage /> },
    { path: "/orders/add", element: <AddOrderPage /> },
    { path: "/orders/:id", element: <OrderPage /> },
    // { path: "/invoices", element: <InvoicesPage /> },
    { path: "/register", element: <RegisterPage /> },
  ]);
};

export default Routes;
