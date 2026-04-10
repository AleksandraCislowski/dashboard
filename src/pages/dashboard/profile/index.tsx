import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Login from "@/components/Login";
import classes from "@/styles/ProfileSettings.module.scss";

const workspaceStats = [
  {
    label: "Workspace role",
    value: "Operations lead",
    context: "default owner for weekly performance reviews",
  },
  {
    label: "Saved views",
    value: "6",
    context: "shared across Northstar dashboards",
  },
  {
    label: "Alert coverage",
    value: "3 channels",
    context: "conversion, refund, and fulfillment alerts enabled",
  },
];

const Profile = () => {
  const { data: session } = useSession();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    receiveEmails: false,
  });

  const [passwordMatch, setPasswordMatch] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (session) {
      // @ts-ignore
      const names = session.user.name.split(" ");
      const firstName = names[0];
      const lastName = names.length > 1 ? names[names.length - 1] : "";
      setFormData({
        firstName,
        lastName,
        // @ts-ignore
        email: session.user.email,
        password: "",
        confirmPassword: "",
        receiveEmails: false,
      });
    }
  }, [session]);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    setSaved(false);
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "receiveEmails" ? checked : value,
    }));

    if (name === "password") {
      setPasswordMatch(formData.confirmPassword === value);
    }

    if (name === "confirmPassword") {
      setPasswordMatch(value === formData.password);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!formData.password && !formData.confirmPassword) {
      setSaved(true);
      return;
    }

    if (passwordMatch) {
      setFormData((prevState) => ({
        ...prevState,
        password: "",
        confirmPassword: "",
      }));
      setFormSubmitted(false);
      setPasswordMatch(false);
      setSaved(true);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };

  if (!session) {
    return <Login />;
  }

  return (
    <Box className={classes.page}>
      <section className={classes.hero}>
        <div className={classes.heroIntro}>
          <span className={classes.kicker}>Account</span>
          <h2>Manage your Northstar workspace identity.</h2>
          <p>
            Keep profile details, login credentials, and reporting preferences
            aligned with how you operate the storefront every week.
          </p>
        </div>
        <Paper className={classes.heroPanel}>
          <div className={classes.avatarRow}>
            <Avatar
              sx={{ height: 88, width: 88 }}
              src={session?.user?.image as string}
            />
            <div>
              <Typography variant='h6'>{session?.user?.name}</Typography>
              <Typography className={classes.subtleText}>
                Northstar workspace owner
              </Typography>
            </div>
          </div>
          <div className={classes.metaRow}>
            <div>
              <strong>Weekly digest</strong>
              <span>Friday, 8:00 AM CET</span>
            </div>
            <div>
              <strong>Alert routing</strong>
              <span>Email + in-product notifications</span>
            </div>
          </div>
        </Paper>
      </section>

      <section className={classes.statsGrid}>
        {workspaceStats.map((item) => (
          <Paper key={item.label} className={classes.statCard}>
            <span className={classes.cardLabel}>{item.label}</span>
            <strong>{item.value}</strong>
            <span className={classes.cardContext}>{item.context}</span>
          </Paper>
        ))}
      </section>

      <section className={classes.workspaceGrid}>
        <Paper className={classes.formPanel}>
          <div className={classes.sectionHeader}>
            <div>
              <span className={classes.sectionKicker}>Profile details</span>
              <Typography variant='h5'>Account and login settings</Typography>
            </div>
            <Typography className={classes.subtleText}>
              Update your visible workspace information and control how
              Northstar sends performance updates.
            </Typography>
          </div>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label='First name'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleFormChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label='Last name'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleFormChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type='email'
                  label='Email address'
                  name='email'
                  value={formData.email}
                  onChange={handleFormChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  label='New password'
                  name='password'
                  value={formData.password}
                  onChange={handleFormChange}
                  helperText='Leave blank if you are only updating your workspace profile.'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton onClick={toggleShowPassword} edge='end'>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type={showConfirmPassword ? "text" : "password"}
                  label='Confirm new password'
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleFormChange}
                  error={
                    Boolean(formData.password || formData.confirmPassword) &&
                    !passwordMatch &&
                    formSubmitted
                  }
                  helperText={
                    Boolean(formData.password || formData.confirmPassword) &&
                    !passwordMatch &&
                    formSubmitted
                      ? "Passwords must match"
                      : "Use confirmation to validate any password change."
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          onClick={toggleShowConfirmPassword}
                          edge='end'
                        >
                          {showConfirmPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name='receiveEmails'
                      checked={formData.receiveEmails}
                      onChange={handleFormChange}
                      color='primary'
                    />
                  }
                  label='Send me weekly storefront performance highlights'
                />
              </Grid>
              <Grid item xs={12}>
                <div className={classes.actionRow}>
                  <Button type='submit' variant='contained' color='primary'>
                    Save changes
                  </Button>
                  <Typography className={classes.subtleText}>
                    Updates are preview-only in this portfolio build.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </form>
        </Paper>

        <Paper className={classes.notesPanel}>
          <div className={classes.sectionHeader}>
            <div>
              <span className={classes.sectionKicker}>Workspace notes</span>
              <Typography variant='h6'>Current setup</Typography>
            </div>
            <Typography className={classes.subtleText}>
              A quick summary of how this account is configured inside
              Northstar Commerce.
            </Typography>
          </div>

          <div className={classes.noteList}>
            <div className={classes.noteItem}>
              <strong>Order alerts</strong>
              <p>Refund spikes and shipping delays are routed to this account.</p>
            </div>
            <div className={classes.noteItem}>
              <strong>Shared views</strong>
              <p>The weekly leadership dashboard is published from this workspace.</p>
            </div>
            <div className={classes.noteItem}>
              <strong>Digest preference</strong>
              <p>Friday summaries are enabled for channel, retention, and risk metrics.</p>
            </div>
          </div>

          {saved && (
            <div className={classes.successCard}>
              Account changes captured for preview. In a live product, this
              would trigger a saved state and confirmation toast.
            </div>
          )}
        </Paper>
      </section>
    </Box>
  );
};

export default Profile;
