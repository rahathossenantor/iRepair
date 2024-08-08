import App from "@/App";
import AdminLayout from "@/components/ui/layouts/AdminLayout";
import About from "@/pages/About";
import AddService from "@/pages/AddService";
import Dashboard from "@/pages/Dashboard";
import Home from "@/pages/Home";
import ServiceList from "@/pages/ServiceList";
import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
        ]
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/admin/dashboard" />
            },
            {
                path: "/admin/dashboard",
                element: <Dashboard />
            },
            {
                path: "/admin/add-service",
                element: <AddService />
            },
            {
                path: "/admin/service-list",
                element: <ServiceList />
            }
        ]
    }
]);

export default router;
