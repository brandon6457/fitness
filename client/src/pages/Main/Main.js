<<<<<<< Updated upstream
import React from 'react';
=======
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
>>>>>>> Stashed changes

const Main = () => {
  return (
<<<<<<< Updated upstream
    <main>
      <h2>MAIN COMING SOON</h2>
    </main>
=======
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
>>>>>>> Stashed changes
  );
};

export default Main;
