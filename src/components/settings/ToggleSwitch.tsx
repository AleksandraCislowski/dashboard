import { Switch, FormControlLabel } from "@mui/material";
import React from "react";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  ariaLabel?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
  label,
  ariaLabel,
}) => {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={onChange}
          inputProps={{ "aria-label": ariaLabel ?? label }}
        />
      }
      label={label}
    />
  );
};

export default ToggleSwitch;
