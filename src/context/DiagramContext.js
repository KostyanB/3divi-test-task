import React, { createContext } from 'react';
import useVisitTime from '../hooks/useVisitTime';
import useTimeScale from '../hooks/useTimeScale';

export const DiagramContext = createContext();

export const DiagramContextProvider = props => {
  const visitTime = useVisitTime();
  const timeScale = useTimeScale();

  return (
    <DiagramContext.Provider
      value={{
        visitTime,
        timeScale,
      }}>
      {props.children}
    </DiagramContext.Provider>
  );
};
