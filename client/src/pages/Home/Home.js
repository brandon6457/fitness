import React from "react";
import { BiShow, BiHide } from "react-icons/bi";
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
import "./Home.css";
export default function Home() {
  const [formState, setFormState] = React.useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    console.log("event", event);
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);

      window.location.replace("/profile");
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div>
        <video loop autoPlay muted id="bg-video">
          <source src={require("../../videos/running.mp4")} type="video/mp4" />
        </video>
      </div>
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
              color: "#1c1c1c",
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
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={formState.password}
            />
            <Spacer y={1} />
            {showPassword ? (
              <BiShow size={30} onClick={handleShowPassword} />
            ) : (
              <BiHide size={30} onClick={handleShowPassword} />
            )}
            <Button
              css={{
                color: "#1c1c1c",
                backgroundColor: "#4cb944",
                fontSize: "18px",
                marginTop: "10px",
                "&:hover": {
                  backgroundColor: "#3c9933",
                },
                "&:active": {
                  backgroundColor: "#286622",
                },
              }}
              onClick={() => window.location.replace("/signup")}
            >
              Sign Up
            </Button>
            <Button
              css={{
                color: "#1c1c1c",
                backgroundColor: "#4cb944",
                fontSize: "18px",
                marginTop: "20px",
                "&:hover": {
                  backgroundColor: "#3c9933",
                },
                "&:active": {
                  backgroundColor: "#286622",
                },
              }}
              type="submit"
            >
              Sign In
            </Button>
            <Spacer y={1} />
          </form>
          <Spacer y={1} />
        </Card>
      </Container>
    </div>
  );
}
