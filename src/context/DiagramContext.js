import React, { createContext } from 'react';
import useVisitTime from '../hooks/useVisitTime';
import useMaxTimeInDay from '../hooks/useMaxTimeInDay';

export const DiagramContext = createContext();

export const DiagramContextProvider = props => {
  const visitTime = useVisitTime();
  const maxTimeInDay = useMaxTimeInDay();

  return (
    <DiagramContext.Provider
      value={{
        visitTime,
        maxTimeInDay,
      }}>
      {props.children}
    </DiagramContext.Provider>
  );
};
