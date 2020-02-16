import Dashboard from "./views/Dashboard";
import AdminPage from "./views/AdminPage";

const dashBoardRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: "/admin",
        name: "AdminPage",
        component: AdminPage
    },
];

export default dashBoardRoutes;