// #eec643 saffron
// #1c1c1c black
// #4cb944 green
// #fafaff white
// #de541e orange
import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Spacer,
  Button,
  Text,
  Input,
  Container,
} from "@nextui-org/react";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
export default function Home() {

  const [formState, setFormState] = React.useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value)
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    console.log('event', event)
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);

      // redirect to home page
      window.location.replace("/profile");

    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };


  return (
    <div>
      <Container
        display="flex"
        alignItems="center"
        justify="center"
        css={{
          minHeight: "100vh",
        }}
      >
        <Card css={{ mw: "420px", p: "20px" }}>
          <Text
            size={44}
            weight="bold"
            css={{
              color: "#eec643",
              textAlign: "center",
              marginBottom: "20px",
              backgroundColor: "#4cb944",
              borderRadius: "10px",
              padding: "10px",
              boxShadow: "0 0 4px #4cb944",
            }}
          >
            Fitness Login
          </Text>
          <form onSubmit={handleFormSubmit}>

          <Input
            clearable
            bordered
            fullWidth
            color="error"
            size="lg"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={formState.email}
            />
          <Spacer y={1} />
          <Input
            clearable
            bordered
            fullWidth
            color="error"
            size="lg"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={formState.password}
            />
          <Spacer y={1} />
      <Button
        css={{
          color: "#4cb944",
          backgroundColor: "#eec643",
          fontSize: "18px",
          
        }}
        type="submit"
        >
        Sign In
      </Button>
        </form>

          <Spacer y={1} />
          <Link to="/signup"
            css={{
              color: "#eec643",
              backgroundColor: "#4cb944",
              fontSize: "18px",
              
            }}
          >
            Sign Up
          </Link>
        </Card>
      </Container>
    </div>
  );
}
