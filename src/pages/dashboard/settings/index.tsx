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
  const [showAnnouncements, setShowAnnouncements] = React.useState(false);
  const [showMeetups, setShowMeetups] = React.useState(false);
  const [showProfile, setShowProfile] = React.useState(false);
  const [showRead, setShowRead] = React.useState(false);

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

  const handleShowAnnouncementChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowAnnouncements(event.target.checked);
  };

  const handleShowMeetupsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowMeetups(event.target.checked);
  };
  const handleShowProfileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowProfile(event.target.checked);
  };
  const handleShowReadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowRead(event.target.checked);
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
        Settings: Notifications
      </Typography>
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography paragraph gutterBottom>
          Check out all the features, that you want to add to your profile:
        </Typography>
        <form onSubmit={handleSubmit1}>
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
        Save Settings
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
            Alerts
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
              paragraph='Transactional emails and account notifications.'
            />
            <ToggleSwitch
              checked={showBilling}
              onChange={handleShowBillingChange}
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
              paragraph='Occasional announcements of new features.'
            />
            <ToggleSwitch
              checked={showAnnouncements}
              onChange={handleShowAnnouncementChange}
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
              paragraph='Get an email when a Meetup is posted close to my location.'
            />
            <ToggleSwitch
              checked={showMeetups}
              onChange={handleShowMeetupsChange}
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
              paragraph='When this is on, people on this platform can find and view your profile globally.'
            />
            <ToggleSwitch
              checked={showProfile}
              onChange={handleShowProfileChange}
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
              subtitle='Read Receipt'
              paragraph='When this is on, people are notified when you have read this message.'
            />
            <ToggleSwitch
              checked={showRead}
              onChange={handleShowReadChange}
              label=''
            />
          </Paper>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            sx={{ p: 1, mb: 2, mr: 2 }}
          >
            Save Settings
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
