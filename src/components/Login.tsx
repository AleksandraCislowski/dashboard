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
          Sign Out
        </Button>
      </Box>
    );
  }

  return (
    <Box py={4}>
      <Typography variant='h4' gutterBottom>
        Wanna see more features?
      </Typography>
      <Typography variant='body1' paragraph>
        If you wish to see more details on this profile example page, you need
        to login. By clicking on Sign In button you will be logging in with help
        of the Google service. You will be using your own, real e-mail address
        and your own password. I will not have access to your password.
      </Typography>
      <Typography variant='h5' gutterBottom>
        If you want to log in, please follow those steps:
      </Typography>
      <Typography variant='body1' component='ol' paragraph>
        <li>Click the green Sign In button.</li>
        <li>Click the Sign In with Google.</li>
        <li>
          Choose the account that you want to use for logging in to Dashboard
          application.
        </li>
        <li>Type in your password.</li>
        <li>Read the terms if you want, click Next if you agree to proceed.</li>
      </Typography>
      <Box textAlign='left' mt={4}>
        <Button
          variant='contained'
          color='success'
          onClick={() => signIn()}
          disabled={isPlaying}
        >
          Sign In
        </Button>
      </Box>
      <Typography variant='h4' gutterBottom mt={4}>
        Do not want to log in and share your data?
      </Typography>
      <Typography variant='body1' gutterBottom mb={4}>
        No problem! Check out this video that will show you how it looks like
        after logging in!
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
