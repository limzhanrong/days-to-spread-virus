import { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppContextProvider(props) {
  const [selected, setSelected] = useState("healthy")
  const [running, setRunning] = useState(false)
  const optionsData = {
    "healthy": {
      value:"healthy",
      image:"/healthy.png"
    },
    "sick":{
      value:"sick",
      image:"/sick.png"
    },
    "virus":{
      value:"virus",
      image:"/virus.png"
    },
    "wall":{
      value:"wall",
      image:"/wall.png"
    },
    "eraser":{
      value:null,
      image:"/eraser.png"
    }
  }

  return (
    <AppContext.Provider 
      value={{
        optionsData:optionsData, 
        useSelectedState:[selected, setSelected], 
        useRunningState:[running, setRunning]
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
