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
        Notification Preferences
      </Typography>
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography paragraph gutterBottom>
          Choose which business metrics should appear more prominently across
          your workspace.
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
                  label='Profit'
                />
                <ToggleSwitch
                  checked={showOrders}
                  onChange={(event) => toggler(event, setShowOrders)}
                  label='Orders'
                />
                <ToggleSwitch
                  checked={showCustomers}
                  onChange={(event) => toggler(event, setShowCustomers)}
                  label='Customers'
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
            Communication Preferences
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
              subtitle='Billing and account'
              paragraph='Essential account activity, billing updates, and security notices.'
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
              subtitle='Announcements'
              paragraph='Product news, feature launches, and occasional platform updates.'
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
              subtitle='Meetups'
              paragraph='Receive invites to local events, webinars, and community sessions.'
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
              subtitle='Public profile'
              paragraph='Let other users discover and view your profile across the platform.'
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
              subtitle='Read receipts'
              paragraph='Notify collaborators when you have opened and read a message.'
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
