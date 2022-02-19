import React, { createContext } from 'react';
import useVisitTime from '../hooks/useVisitTime';

export const DiagramContext = createContext();

export const DiagramContextProvider = props => {
  const visitTime = useVisitTime();

  return (
    <DiagramContext.Provider
      value={{
        visitTime,
      }}>
      {props.children}
    </DiagramContext.Provider>
  );
};
