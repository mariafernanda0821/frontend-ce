import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
//import { Provider } from 'react-redux';
//import store from './configRedux/store.js';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from "apollo-link-context";
import { createUploadLink } from 'apollo-upload-client'; //"apollo-upload-client/public/createUploadLink.js";

import reportWebVitals from './reportWebVitals';
import './index.css';
import './styles.css';


const middlewareUpdate = createUploadLink({
  uri: 'http://localhost:4000/graphql',
  fetch: fetch,
});

const authLink = setContext((_, { headers }) => {
  
  const token = "123456789";//localStorage.getItem("token");
  
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Initialize Apollo Client
const client = new ApolloClient({
  link: authLink.concat(middlewareUpdate),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));

{/* <Provider store={store}> */}
{/*  </Provider> */}
root.render(

    <React.StrictMode>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
