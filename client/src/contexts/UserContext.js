import { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [address, setAddress] = useState('');

  return (
    <UserContext.Provider value={{ address, setAddress }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
