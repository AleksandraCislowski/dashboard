import React from "react";
import { Box, Button, FormGroup, Grid, Paper, Typography } from "@mui/material";
import ToggleSwitch from "@/components/settings/ToggleSwitch";
import TextBox from "@/components/settings/TextBox";

const Settings = () => {
  const [showRevenue, setShowRevenue] = React.useState(true);
  const [showProfit, setShowProfit] = React.useState(false);
  const [showOrders, setShowOrders] = React.useState(false);
  const [showCustomers, setShowCustomers] = React.useState(false);
  const [showBilling, setShowBilling] = React.useState(false);
  const [showAnnouncements, setShowAnnouncements] = React.useState(false);
  const [showMeetups, setShowMeetups] = React.useState(false);
  const [showProfile, setShowProfile] = React.useState(false);
  const [showRead, setShowRead] = React.useState(false);

  const toggler = (
    event: React.ChangeEvent<HTMLInputElement>,
    callback: Function
  ) => {
    callback(event.target.checked);
  };

  const handleSubmit1 = (event: any) => {
    event.preventDefault();
  };

  const handleSubmit2 = (event: any) => {
    event.preventDefault();
  };

  return (
    <>
      <Typography variant='h4' gutterBottom>
        Workspace Preferences
      </Typography>
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography paragraph gutterBottom>
          Control which Northstar Commerce metrics and notifications should stay
          most visible across your daily workspace.
        </Typography>
        <form onSubmit={handleSubmit1}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormGroup>
                <ToggleSwitch
                  checked={showRevenue}
                  onChange={(event) => toggler(event, setShowRevenue)}
                  label='Revenue'
                />
                <ToggleSwitch
                  checked={showProfit}
                  onChange={(event) => toggler(event, setShowProfit)}
                  label='Conversion'
                />
                <ToggleSwitch
                  checked={showOrders}
                  onChange={(event) => toggler(event, setShowOrders)}
                  label='Orders'
                />
                <ToggleSwitch
                  checked={showCustomers}
                  onChange={(event) => toggler(event, setShowCustomers)}
                  label='Returning customers'
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </form>
      </Paper>
      <Button
        type='submit'
        variant='contained'
        color='primary'
        sx={{ p: 1, mb: 2, mr: 2 }}
      >
        Save preferences
      </Button>
      <Button
        type='submit'
        variant='contained'
        color='error'
        sx={{ p: 1, mb: 2, mr: 2 }}
      >
        Cancel
      </Button>
      <Box>
        <form onSubmit={handleSubmit2}>
          <Typography variant='h6' gutterBottom>
            Team Notifications
          </Typography>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
              p: 2,
            }}
          >
            <TextBox
              subtitle='Billing and workspace'
              paragraph='Essential workspace activity, billing updates, and account security notices.'
            />
            <ToggleSwitch
              checked={showBilling}
              onChange={(event) => toggler(event, setShowBilling)}
              label=''
            />
          </Paper>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
              p: 2,
            }}
          >
            <TextBox
              subtitle='Product updates'
              paragraph='Feature launches, reporting improvements, and occasional Northstar product news.'
            />
            <ToggleSwitch
              checked={showAnnouncements}
              onChange={(event) => toggler(event, setShowAnnouncements)}
              label=''
            />
          </Paper>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
              p: 2,
            }}
          >
            <TextBox
              subtitle='Performance alerts'
              paragraph='Get notified when conversion, revenue, or refund signals drift outside expected ranges.'
            />
            <ToggleSwitch
              checked={showMeetups}
              onChange={(event) => toggler(event, setShowMeetups)}
              label=''
            />
          </Paper>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
              p: 2,
            }}
          >
            <TextBox
              subtitle='Shared dashboards'
              paragraph='Allow teammates to view your saved dashboard setup and workspace defaults.'
            />
            <ToggleSwitch
              checked={showProfile}
              onChange={(event) => toggler(event, setShowProfile)}
              label=''
            />
          </Paper>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
              p: 2,
            }}
          >
            <TextBox
              subtitle='Digest emails'
              paragraph='Receive a recurring summary of key storefront metrics and notable changes.'
            />
            <ToggleSwitch
              checked={showRead}
              onChange={(event) => toggler(event, setShowRead)}
              label=''
            />
          </Paper>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            sx={{ p: 1, mb: 2, mr: 2 }}
          >
            Save preferences
          </Button>
          <Button
            type='submit'
            variant='contained'
            color='error'
            sx={{ p: 1, mb: 2, mr: 2 }}
          >
            Cancel
          </Button>
        </form>
      </Box>
    </>
  );
};

export default Settings;
