/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useContext, useState } from 'react';

type ContextType = {
  user: any;
  // eslint-disable-next-line no-unused-vars
  login: (user: any) => void;
  logout: () => void;
};

const authContext = createContext<ContextType>({} as ContextType);

type ContextProviderProps = {
  children: ReactNode;
};

const AuthContextProvider = ({ children }: ContextProviderProps) => {
  const [user, setUser] = useState({});

  const login = (user: any) => setUser(user);
  const logout = () => setUser({});

  return (
    <authContext.Provider value={{ user, login, logout }}>
      {children}
    </authContext.Provider>
  );
};

const UseAuthConsumer = () => useContext(authContext);

export { AuthContextProvider, UseAuthConsumer };
