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
import React from "react";

export default function SignUp() {
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
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <TextField
              color="error"
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <TextField
              color="error"
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              InputProps={{
                inputMode: "email",
                pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
              }}
            />

            <TextField
              color="error"
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              inputProps={{ minLength: 5 }}
            />

            <TextField
              color="error"
              label="Age"
              variant="outlined"
              fullWidth
              margin="normal"
              type="number"
              inputProps={{ maxLength: 3 }}
            />
            <TextField
              color="error"
              label="Weight (lbs)"
              variant="outlined"
              fullWidth
              margin="normal"
              type="number"
              inputProps={{ maxLength: 3 }}
            />

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  color="error"
                  label="Height (Ft)"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="number"
                  inputProps={{ maxLength: 3 }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  color="error"
                  label="Height (In)"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="number"
                  inputProps={{ maxLength: 3 }}
                />
              </Grid>
            </Grid>

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
            >
              Start Your Fitness Journey
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
