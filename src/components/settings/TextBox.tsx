import React from "react";
import { Box, Typography } from "@mui/material";

interface TextBoxProps {
  subtitle: string;
  paragraph: string;
}

const TextBox: React.FC<TextBoxProps> = ({ subtitle, paragraph }) => {
  return (
    <Box>
      <Typography component='p' sx={{ fontWeight: 600, mb: 1 }}>
        {subtitle}
      </Typography>
      <Typography component='p' sx={{ mb: 1 }}>
        {paragraph}
      </Typography>
    </Box>
  );
};

export default TextBox;
