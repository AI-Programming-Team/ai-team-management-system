import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-gray-100 w-64 p-4 border-r border-gray-200 h-screen rounded-l-2xl shadow-inner">
      <h2 className="text-lg font-semibold mb-4">AI Teams</h2>
      <ul className="space-y-2">
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Development</li>
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Marketing</li>
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Business</li>
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">IT Ops</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
