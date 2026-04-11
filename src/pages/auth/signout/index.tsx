import React from "react";
import Link from "next/link";
import { Box, Button, Paper, Typography } from "@mui/material";

const SignOut = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        py: 6,
      }}
    >
      <Paper
        sx={{
          maxWidth: 560,
          p: 4,
          borderRadius: "24px",
          textAlign: "center",
        }}
      >
        <Typography variant='h4' gutterBottom>
          You have been signed out.
        </Typography>
        <Typography paragraph>
          Your Northstar Commerce session ended. You can return to the demo
          dashboard at any time.
        </Typography>
        <Button component={Link} href='/dashboard' variant='contained'>
          Back to dashboard
        </Button>
      </Paper>
    </Box>
  );
};

export default SignOut;
