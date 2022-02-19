import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { useDispatch, useSelector } from 'react-redux';

import { DiagramContext } from '../../context';
import {
  selectDevicesEntities,
  selectSelectedDevices,
} from '../../store/devicesSlice';
import calcVisitTime from '../../helpers/calcVisitTime';

import DayColumns from './DayColumns';

import WeekDays from './WeekDays';
import GridBack from './GridBack';

const Wrapper = styled.div`
  width: 100%;
  /* height: 150px; */
  flex-grow: 1;
  display: grid;
  grid-template-columns: 50px repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr) 30px;
  padding-right: 30px;
`;

const Diagram = () => {
  const devicesEntities = useSelector(selectDevicesEntities);
  const selectedDevices = useSelector(selectSelectedDevices);
  const {
    visitTime: { setVisitTime },
  } = useContext(DiagramContext);

  useEffect(() => {
    const visits = calcVisitTime({
      timeData: devicesEntities,
      devicesData: selectedDevices,
    });
    setVisitTime(visits);
  }, [devicesEntities, selectedDevices, setVisitTime]);

  return (
    <Wrapper>
      <DayColumns />
      <WeekDays />
      <GridBack />
    </Wrapper>
  );
};
export default Diagram;
