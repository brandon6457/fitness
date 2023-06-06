import React, { useState, useEffect } from "react";
// import Navbar from '../src/components/Navbar';
import Footer from "./components/Footer"
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
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
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
        <Footer />
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
