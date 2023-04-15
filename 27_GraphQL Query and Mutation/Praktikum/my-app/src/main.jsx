import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Toaster } from 'react-hot-toast'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';


const client = new ApolloClient({
  uri: 'https://funny-cricket-50.hasura.app/v1/graphql',
  headers: {
    "x-hasura-admin-secret": 'gyzZ333C2ycqQI8NphEIDaDDI5eAtpKvItZlEiPZiDhW17h3aeG2jzVpuMmtaHFF'
  },
  cache: new InMemoryCache(),
});

// export const apolloClient = new ApolloClient({
//   uri: 'https://funny-cricket-50.hasura.app/v1/graphql',
//   cache: new InMemoryCache(),
//   headers: {
//     "x-hasura-admin-secret": 'gyzZ333C2ycqQI8NphEIDaDDI5eAtpKvItZlEiPZiDhW17h3aeG2jzVpuMmtaHFF'
//   }
// });


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ApolloProvider client={client}>
      <App />
      <Toaster />
    </ApolloProvider>
  </>
)
