import React from "react";
import Login from "@/components/Login";
import { useSession } from "next-auth/react";
import Box from "@mui/material/Box";
import Dashboard from "@/pages/dashboard";

const SignIn = () => {
  const { data: session } = useSession();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>{session ? <Dashboard /> : "Welcome page when unlogged"}</h2>
      <Login />
    </Box>
  );
};

export default SignIn;
