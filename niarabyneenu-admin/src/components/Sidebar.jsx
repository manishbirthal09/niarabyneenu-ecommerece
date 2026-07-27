import { NavLink } from "react-router-dom";
import { LayoutDashboard, Package, Tag, ShoppingBag, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const links = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/products", label: "Products", icon: Package },
  { to: "/categories", label: "Categories", icon: Tag },
  { to: "/orders", label: "Orders", icon: ShoppingBag },
];

export default function Sidebar() {
  const { logout } = useAuth();

  return (
    <aside className="w-60 bg-[#16271C] text-gray-200 min-h-screen flex flex-col">
      <div className="p-5 text-lg font-semibold border-b border-gray-800">
        NiarabyNeenu Admin
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition ${
                isActive ? "bg-[#16271C] text-white" : "hover:bg-[#16271C]/10"
              }`
            }
          >
            <Icon size={16} />
            {label}
          </NavLink>
        ))}
      </nav>
      <button
        onClick={logout}
        className="flex items-center gap-3 px-3 py-3 m-3 text-sm rounded-md hover:bg-[#16271C]/10"
      >
        <LogOut size={16} />
        Logout
      </button>
    </aside>
  );
}