import React from "react";
import TeamDashboard from "./pages/TeamDashboard";
import Login from "./pages/Login";
import usePersistedState from "./hooks/usePersistedState";

export default function App() {
  const [user, setUser] = usePersistedState("user", null);

  const handleLogin = (username) => {
    setUser({ username });
  };
  const handleLogout = () => setUser(null);

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return <TeamDashboard user={user} onLogout={handleLogout} />;
}