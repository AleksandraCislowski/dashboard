import { Box, Button, Typography } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";
import Head from "next/head";

const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Button variant='contained' color='error' onClick={() => signOut()}>
          Sign Out
        </Button>
      </>
    );
  }
  return (
    <>
      <Box>
        <Typography variant='h2'>Wanna see more features?</Typography>
        <Typography variant='body1'>
          If you wish to see more details on this profile example page, you need
          to login. By clicking on "Sign In" button you will be loggin in with
          help of the Google service. You will be using your own, real e-mail
          address and your own password. I will not have access to your
          password.
        </Typography>
        <Typography variant='h4'>
          If you want to log in, please follow those steps:
        </Typography>
        <Typography variant='body1' component='ol'>
          <li>Click the green "Sign In" button.</li>
          <li>Click the "Sign In with Google".</li>
          <li>
            Choose the account that you want to use for logging in to
            "Dashboard" application.
          </li>
          <li>Type in your password.</li>
          <li>
            Read the terms if you want, click "Next" if you agree to proceed.
          </li>
        </Typography>
        <Button variant='contained' color='success' onClick={() => signIn()}>
          Sign In
        </Button>
      </Box>
      <Box>
        <Typography variant='h2'>
          Don't want to log in and share your data?
        </Typography>
        <Typography variant='h4'>
          No problem! Check out this video that will show you how does it looks
          like after the logging in!
        </Typography>
        <div>
          <Head>
            <title>My Video Page</title>
          </Head>

          <h1>My Video Page</h1>

          <video width='1300' height='790' controls>
            <source src='/loginVideo.mp4' type='video/mp4' />
          </video>
        </div>
      </Box>
    </>
  );
};

export default Login;
