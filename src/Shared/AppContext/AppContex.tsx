import React, {createContext, FC, useContext} from 'react';
import {useState} from 'react';

import {AppContextType} from './types';

export const AppContext = createContext<AppContextType>({
  showHeader: false,
  showNavigation: false,
  setShowHeader: () => {},
  setShowNavigation: () => {},
});

export const AppContextProvider: FC = ({children}) => {
  const [showHeader, setShowHeader] = useState(true);
  const [showNavigation, setShowNavigation] = useState(true);

  const setHeader = (visible: boolean) => {
    setShowHeader(visible);
  };

  const setBottomNavigation = (visible: boolean) => {
    setShowNavigation(visible);
  };

  return (
    <AppContext.Provider
      value={{
        showHeader,
        showNavigation,
        setShowHeader: setHeader,
        setShowNavigation: setBottomNavigation,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};
