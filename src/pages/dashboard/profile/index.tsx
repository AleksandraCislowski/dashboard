import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Paper from "@mui/material/Paper";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Login from "@/components/Login";

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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (session) {
      // @ts-ignore:
      const names = session.user.name.split(" ");
      const firstName = names[0];
      const lastName = names.length > 1 ? names[names.length - 1] : "";
      setFormData({
        firstName: firstName,
        lastName: lastName,
        // @ts-ignore:
        email: session.user.email,
        password: "",
        confirmPassword: "",
        receiveEmails: false,
      });
    }
  }, [session]);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "receiveEmails" ? checked : value,
    }));

    if (name === "confirmPassword") {
      setPasswordMatch(value === formData.password);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (passwordMatch) {
      setFormData((prevState) => ({
        ...prevState,
        password: "",
        confirmPassword: "",
        receiveEmails: false,
      }));
      setFormSubmitted(false);
      setPasswordMatch(false);
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

  return (
    <>
      {session ? (
        <>
          <h2>Profile Settings</h2>
          <Box>
            <Typography variant={"h6"} sx={{ paddingBottom: 4 }}>
              Welcome back, {session ? session?.user?.name : "there"}.
            </Typography>
            <Typography variant='body1' sx={{ paddingBottom: 4 }}>
              This demo profile view simulates a lightweight account settings
              flow. Changes are not persisted, so feel free to explore the
              interface safely.
            </Typography>
            <Paper sx={{ padding: "1rem 2rem" }}>
              <Grid container justifyContent='center'>
                <Grid item xs={12} sm={8} md={6}>
                  <Box
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                  >
                    <Avatar
                      sx={{
                        height: 100,
                        width: 100,
                        marginBottom: 2,
                      }}
                      src={session?.user?.image as string}
                    />
                  </Box>
                  <form
                    onSubmit={handleSubmit}
                    style={{ maxWidth: 600, margin: "0 auto" }}
                  >
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
                          required
                          fullWidth
                          type={showPassword ? "text" : "password"}
                          label='New password'
                          name='password'
                          value={formData.password}
                          onChange={handleFormChange}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position='end'>
                                <IconButton
                                  onClick={toggleShowPassword}
                                  edge='end'
                                >
                                  {showPassword ? (
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
                        <TextField
                          required
                          fullWidth
                          type={showConfirmPassword ? "text" : "password"}
                          label='Confirm new password'
                          name='confirmPassword'
                          value={formData.confirmPassword}
                          onChange={handleFormChange}
                          error={!passwordMatch && formSubmitted}
                          helperText={
                            !passwordMatch &&
                            formSubmitted &&
                            "Passwords must match"
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
                          label='Send me product updates and reporting highlights'
                        />
                      </Grid>
                      <Grid
                        container
                        justifyContent='flex-start'
                        alignItems='center'
                        sx={{ gap: 2, marginLeft: 3, marginTop: 2 }}
                      >
                        <Button
                          type='submit'
                          variant='contained'
                          color='primary'
                          disabled={!passwordMatch}
                        >
                          Save changes
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
              </Grid>
              {passwordMatch && (
                <Typography
                  variant='body1'
                  sx={{ padding: 4 }}
                  textAlign='center'
                >
                  {`Demo preview: your updated password would be ${formData.password}.`}
                </Typography>
              )}
            </Paper>
          </Box>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Profile;
