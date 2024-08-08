import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <aside className="col-span-2 bg-light-gray p-3 lg:p-4 h-screen sticky top-0 left-0 overflow-auto">
            <nav className="flex flex-col gap-2">
                <NavLink
                    to="/admin/dashboard"
                    className={({ isActive }) => cn(
                        "dashboard-navigator",
                        {
                            "bg-dark-gray text-white": isActive
                        }
                    )}
                >
                    <LayoutDashboard className="shrink-0" />
                    <span className="truncate">Dashboard</span>
                </NavLink>
                <NavLink
                    to="/admin/add-service"
                    className={({ isActive }) => cn(
                        "dashboard-navigator",
                        {
                            "bg-dark-gray text-white": isActive
                        }
                    )}
                >
                    <LayoutDashboard className="shrink-0" />
                    <span className="truncate">Add Service</span>
                </NavLink>
                <NavLink
                    to="/admin/service-list"
                    className={({ isActive }) => cn(
                        "dashboard-navigator",
                        {
                            "bg-dark-gray text-white": isActive
                        }
                    )}
                >
                    <LayoutDashboard className="shrink-0" />
                    <span className="truncate">Service List</span>
                </NavLink>
            </nav>
        </aside>
    );
};

export default SideBar;
