import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Switch,
  Typography,
} from "@mui/material";
import ToggleSwitch from "@/components/settings/ToggleSwitch";
import TextBox from "@/components/settings/TextBox";

const Settings = () => {
  const [showRevenue, setShowRevenue] = React.useState(true);
  const [showProfit, setShowProfit] = React.useState(false);
  const [showOrders, setShowOrders] = React.useState(false);
  const [showCustomers, setShowCustomers] = React.useState(false);
  const [showBilling, setShowBilling] = React.useState(false);

  const handleShowRevenueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowRevenue(event.target.checked);
  };

  const handleShowProfitChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowProfit(event.target.checked);
  };

  const handleShowOrdersChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowOrders(event.target.checked);
  };

  const handleShowCustomersChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowCustomers(event.target.checked);
  };

  const handleShowBillingChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowBilling(event.target.checked);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <>
      <Typography variant='h4' gutterBottom>
        Settings: Notifications
      </Typography>
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography paragraph gutterBottom>
          Check out all the features, that you want to add to your profile:
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormGroup>
                <ToggleSwitch
                  checked={showRevenue}
                  onChange={handleShowRevenueChange}
                  label='Revenue'
                />
                <ToggleSwitch
                  checked={showProfit}
                  onChange={handleShowProfitChange}
                  label='Profit'
                />
                <ToggleSwitch
                  checked={showOrders}
                  onChange={handleShowOrdersChange}
                  label='Orders'
                />
                <ToggleSwitch
                  checked={showCustomers}
                  onChange={handleShowCustomersChange}
                  label='Customers'
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' variant='contained' color='primary'>
                Save Settings
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography
          variant='h6'
          gutterBottom
          sx={{ textDecoration: "underline" }}
        >
          Alerts
        </Typography>
        <TextBox
          subtitle='Billing and account'
          paragraph='Transactional emails and account notifications'
        />
        <ToggleSwitch
          checked={showBilling}
          onChange={handleShowBillingChange}
          label=''
        />
      </Paper>
    </>
  );
};

export default Settings;
