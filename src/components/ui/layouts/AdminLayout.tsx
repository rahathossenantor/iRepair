import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const AdminLayout = () => {
    return (
        <div className="grid grid-cols-12">
            <SideBar />
            <div className="col-span-10 p-3 lg:p-4">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;
