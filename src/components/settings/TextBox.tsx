import React from "react";
import { Box, Typography } from "@mui/material";

interface TextBoxProps {
  subtitle: string;
  paragraph: string;
}

const TextBox: React.FC<TextBoxProps> = ({ subtitle, paragraph }) => {
  return (
    <Box>
      <Typography paragraph gutterBottom sx={{ fontWeight: 600 }}>
        {subtitle}
      </Typography>
      <Typography paragraph gutterBottom>
        {paragraph}
      </Typography>
    </Box>
  );
};

export default TextBox;
