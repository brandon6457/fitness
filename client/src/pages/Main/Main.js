
import React, { useState, useEffect } from 'react';
import './Main.css';
import {
  Card,
  Spacer,
  Button,
  Text,
  Input,
  Container,
} from '@nextui-org/react';

const Main = () => {
  let [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <Container
        display="flex"
        alignItems="center"
        justify="center"
        css={{ minHeight: '100vh' }}
      >
      <Card css={{ mw: '420px', p: '20px' }}>
    <div className="circle-container">
      <div className="circle">
        <p className="date">{date.toLocaleDateString()}</p>
      </div>
    </div>
    </Card>
    </Container>
  );
};

export default Main;