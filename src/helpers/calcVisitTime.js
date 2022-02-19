import env from '../env.json';
import createWeekDayTimeObj from './createWeekDayTimeObj';

const calcVisitTime = ({ timeData, devicesData }) => {
  const { weekDays } = env;
  let maxDayTime = 0;

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

      const dayTime = Object.values(weekDayTime[key]).reduce(
        (acc, time) => (acc += time),
        0,
      );
      maxDayTime = Math.max(maxDayTime, dayTime);
    });
  };

  devices.forEach(device => reduceWeekDayTime(timeData[device]));

  return { weekDayTime, maxDayTime };
};
export default calcVisitTime;
