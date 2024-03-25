import React from "react";
import { useSession } from "next-auth/react";
import Box from "@mui/material/Box";
import Profile from "@/pages/dashboard/profile/Profile";

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
      {session && <Profile />}
    </Box>
  );
};

export default SignIn;
