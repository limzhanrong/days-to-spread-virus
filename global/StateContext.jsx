import { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppContextProvider(props) {
  

  return (
    <AppContext.Provider>
      {props.children}
    </AppContext.Provider>
  );
}
