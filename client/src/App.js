import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Main from "./pages/Main/Main";
import Profile from "./pages/Profile/Profile";
import Signup from "./pages/Signup/Signup";
import Contact from "./pages/Contact/Contact";
import Post from "./pages/Post/SinglePost";
import AboutUs from "./pages/About/AboutUs";
import NotFound from "./pages/NotFound/NotFound";
// import Workouts from "./pages/Workouts/Workouts";
import AuthService from "./utils/auth";
import { BrowserRouter as Router, Route, Routes, Redirect} from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import SinglePost from "./pages/Post/SinglePost";


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
  uri: 'http://localhost:3001/graphql',
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

  const [token, setToken] = React.useState(AuthService.loggedIn() ? AuthService.getToken() : null);

  
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Header />
        <Routes>
          <Route path="/main" element={<Main />}/>
          <Route path="/profile" element={ token ? <Profile /> : <Home />}/>
          <Route path ="/post/:postId" element={token ? <Post/> : <Home />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<AboutUs />}/>
          <Route path= "*" element={ <NotFound />}/>
          {/* <Route path="/workouts" element={ <Workouts />}/> */}
        </Routes>
        <Footer />
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
