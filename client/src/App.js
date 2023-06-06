import React, { useState, useEffect } from "react";
import Home from "./pages/Home/Home";
import Main from "./pages/Main/Main";
import Profile from "./pages/Profile/Profile";
import Signup from "./pages/Signup/Signup";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/main" element={<Main />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
