import React, { useContext, createContext, useState } from "react";
import ReactOnRails from 'react-on-rails';
import axios from 'axios';

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}


function useProvideAuth() {
  const [isSignedIn, setIsSignedIn] = useState(localStorage.getItem('token') !== null);

  const headers = ReactOnRails.authenticityHeaders();
  axios.defaults.baseURL = "http://localhost:3000/api"

  async function login(email, password, redirect) {
    try {
      const params = { user: { email: email, password: password } }
      const response = await axios.post("/login", params, { headers: headers })
      setIsSignedIn(true)
      localStorage.setItem('token', response.data.token)
      redirect()
    } catch (err) {
      alert(err.message)
    }
  };

  const logout = (redirect) => {
    setIsSignedIn(false)
    localStorage.removeItem('token')
    redirect()
  };

  return {
    isSignedIn,
    login,
    logout
  };
}

