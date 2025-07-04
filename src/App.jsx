import React from "react";
import TeamDashboard from "./pages/TeamDashboard";
import Login from "./pages/Login";
import { useAuth0 } from "@auth0/auth0-react";

export default function App() {
  const { isAuthenticated, user, logout } = useAuth0();

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <TeamDashboard
      user={user}
      onLogout={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    />
  );
}