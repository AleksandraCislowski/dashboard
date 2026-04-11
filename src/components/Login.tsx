import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Login: React.FC = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.5,
            justifyContent: "center",
          }}
        >
          <Button
            variant='contained'
            color='error'
            onClick={() => signOut({ callbackUrl: "/dashboard" })}
          >
            Sign out
          </Button>
          <Button component={Link} href='/dashboard' variant='outlined'>
            Back to dashboard
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: 680,
        py: 4,
      }}
    >
      <Typography variant='h4' sx={{ mb: 1 }}>
        Want to explore the full profile flow?
      </Typography>
      <Typography variant='body1' component='p' sx={{ mb: 2 }}>
        Sign in with Google to unlock the complete profile experience. The app
        uses your own Google account for authentication, and your password is
        never exposed inside this demo.
      </Typography>
      <Typography variant='h5' sx={{ mb: 1 }}>
        To sign in:
      </Typography>
      <Typography variant='body1' component='ol' sx={{ mb: 2 }}>
        <li>Click the green Sign in button below.</li>
        <li>Choose Sign in with Google.</li>
        <li>Select the Google account you want to use for this demo.</li>
        <li>Approve the sign-in flow to continue.</li>
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mt: 4 }}>
        <Button
          variant='contained'
          color='success'
          onClick={() => signIn("google", { callbackUrl: "/dashboard/profile" })}
        >
          Sign in with Google
        </Button>
        <Button component={Link} href='/dashboard' variant='outlined'>
          Back to dashboard
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
