import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";

const Login: React.FC = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <Box textAlign='center' mt={4}>
        <Button variant='contained' color='error' onClick={() => signOut()}>
          Sign out
        </Button>
      </Box>
    );
  }

  return (
    <Box py={4}>
      <Typography variant='h4' gutterBottom>
        Want to explore the full profile flow?
      </Typography>
      <Typography variant='body1' paragraph>
        Sign in with Google to unlock the complete profile experience. The app
        uses your own Google account for authentication, and your password is
        never exposed inside this demo.
      </Typography>
      <Typography variant='h5' gutterBottom>
        To sign in:
      </Typography>
      <Typography variant='body1' component='ol' paragraph>
        <li>Click the green Sign in button below.</li>
        <li>Choose Sign in with Google.</li>
        <li>Select the Google account you want to use for this demo.</li>
        <li>Approve the sign-in flow to continue.</li>
      </Typography>
      <Box textAlign='left' mt={4}>
        <Button
          variant='contained'
          color='success'
          onClick={() => signIn()}
        >
          Sign in
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
