import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { ADD_USER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from '../../utils/auth';


export default function SignUp() {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    heightFt: '',
    heightIn: '',
    weight: '',
    age: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
// console.log(formState);

  // submit form
  // submit form
const handleFormSubmit = async (event) => {
  event.preventDefault();

  // Convert strings to numbers
  const userData = {
    ...formState,
    age: parseInt(formState.age, 10),
    weight: parseInt(formState.weight, 10),
    heightFt: parseInt(formState.heightFt, 10),
    heightIn: parseInt(formState.heightIn, 10)
  };
  
  console.log("DATA: ", userData);

    try {

      const { data, error } = await addUser({
        variables: { ...userData },
      });
      console.log("DATA: ", data);
      console.log("ERROR: ", error);
      Auth.login(data.addUser.token);
      window.location.replace("/profile");
    } catch (error) {
      console.log('Erro in fetch: ', error)
    }

};

  return (
    <Container
      display="flex"
      alignItems="center"
      justify="center"
      maxWidth="sm"
    >
      <Box sx={{ mt: 4 }}></Box>
      <Card variant="outlined" sx={{ mt: 2, borderRadius: "10px" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: "bold",
            color: "#eec643",
            backgroundColor: "#4cb944",
            borderRadius: "10px",
            padding: "10px",
            boxShadow: "0 0 4px #4cb944",
          }}
        >
          Sign Up
        </Typography>
        <CardContent>
          <Box component="form">
            <TextField
              sx={{ color: "#eec643" }}
              color="error"
              label="First Name"
              name="firstName"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formState.firstName}
                  onChange={handleChange}
            />

            <TextField
              color="error"
              label="Last Name"
              name="lastName"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formState.lastName}
                  onChange={handleChange}
            />

            <TextField
              color="error"
              label="Email"
              name="email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formState.email}
                  onChange={handleChange}
              InputProps={{
                inputMode: "email",
                pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
              }}
            />

            <TextField
              color="error"
              label="Password"
              name="password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              value={formState.password}
                  onChange={handleChange}
              inputProps={{ minLength: 5 }}
            />

            <TextField
              color="error"
              label="Age"
              name="age"
              variant="outlined"
              fullWidth
              margin="normal"
              type="number"
              value={formState.age}
                  onChange={handleChange}
              inputProps={{ maxLength: 3 }}
            />
            <TextField
              color="error"
              name="weight"
              label="Weight (lbs)"
              variant="outlined"
              fullWidth
              margin="normal"
              type="number"
              value={formState.weight}
                  onChange={handleChange}
              inputProps={{ maxLength: 3 }}
            />

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  color="error"
                  label="Height (Ft)"
                  variant="outlined"
                  name="heightFt"
                  fullWidth
                  margin="normal"
                  type="number"
                  value={formState.heightFt}
                  onChange={handleChange}
                  inputProps={{ maxLength: 3 }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  color="error"
                  label="Height (In)"
                  name="heightIn"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="number"
                  value={formState.heightIn}
                  onChange={handleChange}
                  inputProps={{ maxLength: 3 }}
                />
              </Grid>
            </Grid>
              {/* <Link to='/main'> */}
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                mt: 2,
                backgroundColor: "#eec643",
                color: "#4cb944",
                fontWeight: "bold",
                fontSize: "18px",
                "&:hover": {
                  backgroundColor: "#de541e", 
                  color: "#eec643", 
                },
              }}
              onClick={handleFormSubmit}
            >
              Start Your Fitness Journey
            </Button>
            {/* </Link> */}

          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
