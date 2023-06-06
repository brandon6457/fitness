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

export default function Home() {
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
          <Input
            clearable
            bordered
            fullWidth
            color="error"
            size="lg"
            placeholder="Email"
          />
          <Spacer y={1} />
          <Input
            clearable
            bordered
            fullWidth
            color="error"
            size="lg"
            placeholder="Password"
          />
          <Spacer y={1} />

          <Link to="/signup">
      <Button
        css={{
          color: "#4cb944",
          backgroundColor: "#eec643",
          fontSize: "18px",

        }}
      >
        Sign Up
      </Button>
    </Link>

          <Spacer y={1} />
          <Button
            css={{
              color: "#eec643",
              backgroundColor: "#4cb944",
              fontSize: "18px",
              
            }}
          >
            Sign in
          </Button>
        </Card>
      </Container>
    </div>
  );
}
