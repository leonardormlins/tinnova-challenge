import React from 'react';
import Context from './Context';
import useStorage from '../../utils/useStorage';

const StoreProvider = ({ children }) => {
  const [token, setToken] = useStorage('token');
  const [username, setUsername] = useStorage('username');

  return(
    <Context.Provider
      value={{
        token,
        setToken,
        username,
        setUsername,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default StoreProvider;
