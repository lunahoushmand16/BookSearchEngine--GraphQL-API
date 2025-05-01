import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
// Apollo imports
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Set GraphQL endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Add token from localStorage to headers
const authLink = setContext((_: any, { headers }: any) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Initialize Apollo Client
// Important for API Consumption: Create an instance of the ApolloClient class and specify the endpoint of your GraphQL API 
// (e.g., 'http://localhost:3001')—the proxy set up in the previous activity facilitates this. 
// We also instantiate a new InMemoryCache class that automatically caches queried data, enhancing performance.
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Outlet />
    </ApolloProvider>
  );
}

export default App;

// ==============================================
// This is APP.tsx for RestFull API App
// import './App.css';
// import { Outlet } from 'react-router-dom';
// import Navbar from './components/Navbar';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Outlet />
//     </>
//   );
// }

// export default App;
