import React, { useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";
import classes from "@/styles/Login.module.scss";

const Login: React.FC = () => {
  const { data: session } = useSession();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
          disabled={isPlaying}
        >
          Sign in
        </Button>
      </Box>
      <Typography variant='h4' gutterBottom mt={4}>
        Prefer not to sign in?
      </Typography>
      <Typography variant='body1' gutterBottom mb={4}>
        No problem. You can still preview the authenticated experience in the
        walkthrough video below.
      </Typography>
      <Box className={classes.videoContainer}>
        <video ref={videoRef} className={classes.video} controls>
          <source src='/loginVideo.mp4' type='video/mp4' />
        </video>
      </Box>
    </Box>
  );
};

export default Login;
