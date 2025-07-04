import React from "react";
import Button from "../components/ui/Button";
import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded shadow w-full max-w-sm space-y-4">
        <h1 className="text-2xl font-bold text-center">Sign In</h1>
        <Button onClick={() => loginWithRedirect()} className="w-full">
          Sign In
        </Button>
      </div>
    </div>
  );
}