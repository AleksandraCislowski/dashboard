import React from "react";
import { useSession } from "next-auth/react";
import Box from "@mui/material/Box";
import Dashboard from "@/pages/dashboard";
import Welcome from "@/components/Welcome";

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
      <h2>{session ? <Dashboard /> : <Welcome />}</h2>
    </Box>
  );
};

export default SignIn;
