import { useState } from 'react';

const useVisitTime = () => {
  const [visitTime, setVisitTime] = useState(null);

  return { visitTime, setVisitTime };
};
export default useVisitTime;
