import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import AddLog from "./pages/AddLog";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About.js";
import NotFound from "./pages/NotFound.js";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          {/* don't render header on Home Page */}
          <Header />
          <div id="activePage">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/account" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/addLog" element={<AddLog />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
        <svg>
          <filter id="turbulence" x="0" y="0" width="100%" height="100%">
            <feTurbulence
              id="bgFilter"
              numOctaves={3}
              seed="2"
              baseFrequency="0.02 0.05"
            ></feTurbulence>
            <feDisplacementMap
              scale="20"
              in="SourceGraphic"
            ></feDisplacementMap>
            <animate
              xlinkHref="#bgFilter"
              attributeName="baseFrequency"
              dur="60s"
              keyTimes="0;0.5;1"
              values="0.01 0.05;0.03 0.08;0.01 0.05"
              repeatCount="indefinite"
            ></animate>
          </filter>
        </svg>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
