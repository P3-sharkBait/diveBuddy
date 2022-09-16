import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// S3
import { withAuthenticator } from 'aws-amplify-react'
import { Storage, API, graphqlOperation } from 'aws-amplify'
import { v4 as uuid } from 'uuid'
import { createUser as CreateUser } from './graphql/mutations'
import { listUsers } from './graphql/queries'
import { onCreateUser } from './graphql/subscriptions'
import config from './aws-exports'


const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket
} = config

const initialState = {
  users: []
}

function reducer(state, action) {
  switch(action.type) {
    case 'SET_USERS':
      return { ...state, users: action.users }
    case 'ADD_USER':
      return { ...state, users: [action.user, ...state.users] }
    default:
      return state
  }
}


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
  const [file, updateFile] = useState(null)
  const [username, updateUsername] = useState('')
  const [state, dispatch] = useReducer(reducer, initialState)
  const [avatarUrl, updateAvatarUrl] = useState('')

  function handleChange(event) {
    const { target: { value, files } } = event
    const [image] = files || []
    updateFile(image || value)
  }

  async function fetchImage(key) {
    try {
      const imageData = await Storage.get(key)
      updateAvatarUrl(imageData)
    } catch(err) {
      console.log('error: ', err)
    }
  }

  async function fetchUsers() {
    try {
     let users = await API.graphql(graphqlOperation(listUsers))
     users = users.data.listUsers.items
     dispatch({ type: 'SET_USERS', users })
    } catch(err) {
      console.log('error fetching users')
    }
  }

  async function createUser() {
    if (!username) return alert('please enter a username')
    if (file && username) {
        const { name: fileName, type: mimeType } = file  
        const key = `${uuid()}${fileName}`
        const fileForUpload = {
            bucket,
            key,
            region,
        }
        const inputData = { username, avatar: fileForUpload }

        try {
          await Storage.put(key, file, {
            contentType: mimeType
          })
          await API.graphql(graphqlOperation(CreateUser, { input: inputData }))
          updateUsername('')
          console.log('successfully stored user data!')
        } catch (err) {
          console.log('error: ', err)
        }
    }
  }
  useEffect(() => {
    fetchUsers()
    const subscription = API.graphql(graphqlOperation(onCreateUser))
      .subscribe({
        next: async userData => {
          const { onCreateUser } = userData.value.data
          dispatch({ type: 'ADD_USER', user: onCreateUser })
        }
      })
    return () => subscription.unsubscribe()
  }, [])


  // what was already here
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          {/* don't render header on Home Page */}
          <Header />
          <div>
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
        {/* testing buttons -- MIGHT need a form -- SEE BOOKMARK S3 Photos in Chrome*/}
        <div>
          <button onClick={createUser}>Create</button>
          <button onClick={fetchImage}>Fetch Image</button>
          <button onClick={fetchUsers}>Fetch Users</button>
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
