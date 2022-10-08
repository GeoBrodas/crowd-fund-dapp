import { createContext, useContext, useState } from 'react';

const Context = createContext({
  isLoading: false,
  setIsLoading: (value: boolean) => {},
});

const Provider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const exposed = {
    isLoading,
    setIsLoading,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useWeb3 = () => useContext(Context);

export default Provider;
