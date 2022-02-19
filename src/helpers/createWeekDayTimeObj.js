import env from '../env.json';

const createWeekDayTimeObj = () => {
  const { weekDays, visitors } = env;
  const obj = {};

  weekDays.forEach(day => {
    const items = {};
    Object.keys(visitors).forEach(item => (items[item] = 0));
    obj[day] = items;
  });
  return obj;
};
export default createWeekDayTimeObj;
