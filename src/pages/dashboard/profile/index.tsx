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
          <h2>Your Profile</h2>
          <Box>
            <Typography variant={"h6"} sx={{ paddingBottom: 4 }}>
              Hello {session ? session?.user?.name : "User"}, thanks for loggin
              in! 👋
            </Typography>
            <Typography variant='body1' sx={{ paddingBottom: 4 }}>
              This is just an example form, you can pretend that you are
              changing your password here. It's not connected to anywhere, so
              those changes won't apply, don't worry!
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
                          label='First Name'
                          name='firstName'
                          value={formData.firstName}
                          onChange={handleFormChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          label='Last Name'
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
                          label='Email'
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
                          label='Password'
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
                          label='Confirm Password'
                          name='confirmPassword'
                          value={formData.confirmPassword}
                          onChange={handleFormChange}
                          error={!passwordMatch && formSubmitted}
                          helperText={
                            !passwordMatch &&
                            formSubmitted &&
                            "Passwords do not match"
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
                          label='Receive sales analytics emails'
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
                          Save Changes
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
                  {`If this works, your changed password would be: ${formData.password}`}
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
