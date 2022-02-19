import env from '../env.json';
import createWeekDayTimeObj from './createWeekDayTimeObj';

const calcVisitTime = ({ timeData, devicesData }) => {
  const { weekDays } = env;

  const weekDayTime = createWeekDayTimeObj();

  const devices = Object.keys(devicesData).filter(
    key => devicesData[key] && key,
  );

  const reduceWeekDayTime = data => {
    data.o.forEach(item => {
      const dayNum = new Date(item.n).getDay();
      const key = weekDays[dayNum];
      item.o.forEach(user => {
        weekDayTime[key][user.n] += user.vd;
      });
    });
  };

  devices.forEach(device => reduceWeekDayTime(timeData[device]));

  console.log('weekDayTime: ', weekDayTime);
  return weekDayTime;
};
export default calcVisitTime;
