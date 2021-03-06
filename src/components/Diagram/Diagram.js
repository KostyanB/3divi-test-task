import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { DiagramContext } from '../../context';
import {
  selectDevicesEntities,
  selectSelectedDevices,
} from '../../store/devicesSlice';
import calcVisitTime from '../../helpers/calcVisitTime';

import TimeScale from '../TimeScale';
import DayColumns from './DayColumns';
import WeekDays from './WeekDays';
import GridBack from '../GridBack';

const Wrapper = styled.div`
  width: 100%;
  height: 258px;
  display: grid;
  grid-template-columns: 80px repeat(7, 1fr);
  grid-template-rows: repeat(4, 51px) repeat(2, 25px);
  padding-right: 30px;
`;

const Diagram = () => {
  const devicesEntities = useSelector(selectDevicesEntities);
  const selectedDevices = useSelector(selectSelectedDevices);
  const {
    visitTime: { setVisitTime },
    timeScale: { setTimeScale },
  } = useContext(DiagramContext);

  useEffect(() => {
    if (devicesEntities && selectedDevices) {
      const { weekDayTime, maxDayTime } = calcVisitTime({
        timeData: devicesEntities,
        devicesData: selectedDevices,
      });
      setVisitTime(weekDayTime);
      setTimeScale(maxDayTime);
    }
  }, [devicesEntities, selectedDevices, setVisitTime, setTimeScale]);

  return (
    <Wrapper>
      <TimeScale />
      <DayColumns />
      <WeekDays />
      <GridBack />
    </Wrapper>
  );
};
export default Diagram;
