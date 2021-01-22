import { createContext } from 'react';

const StoreContext = createContext({
  token: null,
  username: null,
  setToken: () => {},
  setUsername: () => {},
});

export default StoreContext;