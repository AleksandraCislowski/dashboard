import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
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
        display: "grid",
        gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 0.78fr) minmax(420px, 1fr)" },
        gap: { xs: 4, lg: 5 },
        alignItems: "center",
        maxWidth: 1280,
        py: 4,
      }}
    >
      <Box>
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
        <Typography variant='body1' component='ol' sx={{ mb: 2, pl: 3 }}>
          <li>Click the green Sign in button below.</li>
          <li>Choose Sign in with Google.</li>
          <li>Select the Google account you want to use for this demo.</li>
          <li>Approve the sign-in flow to continue.</li>
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mt: 4 }}>
          <Button
            variant='contained'
            color='success'
            onClick={() =>
              signIn("google", { callbackUrl: "/dashboard/profile" })
            }
          >
            Sign in with Google
          </Button>
          <Button component={Link} href='/dashboard' variant='outlined'>
            Back to dashboard
          </Button>
        </Box>
      </Box>

      <Box
        aria-label='Settings screen preview'
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "28px",
          border: "1px solid",
          borderColor: "divider",
          p: { xs: 1, sm: 1.4 },
          background:
            "linear-gradient(145deg, rgba(44, 122, 123, 0.16), rgba(35, 78, 112, 0.08))",
          boxShadow: "0 24px 80px rgba(15, 23, 32, 0.22)",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: "auto -18% -28% auto",
            width: "55%",
            aspectRatio: "1",
            borderRadius: "999px",
            background: "rgba(44, 122, 123, 0.18)",
            filter: "blur(20px)",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "22px",
            border: "1px solid rgba(255, 255, 255, 0.16)",
            backgroundColor: "background.paper",
          }}
        >
          <Image
            src='/settings.png'
            alt='Preview of the Northstar Commerce settings panel'
            width={1226}
            height={1014}
            sizes='(min-width: 1200px) 620px, 92vw'
            style={{
              display: "block",
              height: "auto",
              width: "100%",
            }}
            priority
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
