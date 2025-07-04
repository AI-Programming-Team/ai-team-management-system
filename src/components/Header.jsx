import React from "react";
import Button from "./ui/Button";

const Header = ({ onLogout }) => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center rounded-t-2xl shadow-md">
      <h1 className="text-xl font-bold">AI Team Dashboard</h1>
       {onLogout && <Button onClick={onLogout}>Sign Out</Button>}
    </header>
  );
};

export default Header;
