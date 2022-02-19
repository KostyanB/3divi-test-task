import React, { createContext } from 'react';
import useVisitTime from '../hooks/useVisitTime';
import useTimeAxis from '../hooks/useTimeAxis';

export const DiagramContext = createContext();

export const DiagramContextProvider = props => {
  const visitTime = useVisitTime();
  const timeAxis = useTimeAxis();

  return (
    <DiagramContext.Provider
      value={{
        visitTime,
        timeAxis,
      }}>
      {props.children}
    </DiagramContext.Provider>
  );
};
