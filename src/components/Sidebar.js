import React, { useState } from "react";
import {
  Home,
  TrendingUp,
  Library,
  Compass,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: "Home" },
    { icon: TrendingUp, label: "Trends" },
    { icon: Library, label: "Library" },
    { icon: Compass, label: "Discover" },
  ];

  const generalItems = [
    { icon: Settings, label: "Settings" },
    { icon: LogOut, label: "Log Out" },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full">

      <div className="flex items-center gap-2 mb-12">
        <div className="text-red-500 text-2xl">♪</div>
        <div className="text-xl font-semibold">
          <span className="text-red-500">Dream</span>
          <span>Music</span>
        </div>
      </div>


      <div className="space-y-6">
        <div className="text-sm text-gray-400 mb-4">MENU</div>
        <div className="space-y-4">
          {menuItems.map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="flex items-center gap-4 text-gray-300 hover:text-white w-full"
            >
              <Icon size={20} className="text-red-500" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>


      <div className="my-12 border-t border-gray-700"></div>


      <div className="space-y-6">
        <div className="text-sm text-gray-400 mb-4">GENERAL</div>
        <div className="space-y-4">
          {generalItems.map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="flex items-center gap-4 text-gray-300 hover:text-white w-full"
            >
              <Icon size={20} className="text-red-500" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div>

      <div className="md:hidden p-4">
        <button
          className="text-gray-300"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <Menu size={24} />
        </button>
      </div>


      <div
        className={`fixed inset-0 bg-neutral-900 p-6 transform ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 md:static md:w-64`}
      >
        <SidebarContent />
      </div>


      {isMobileOpen && (
        <div
          className="fixed  bg-black "
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
