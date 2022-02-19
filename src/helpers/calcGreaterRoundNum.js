const calcGreaterRoundNum = num => {
  const str = num.toString();

  if (str.length <= 1) return num;

  const firstDig = +str.at(0) + 1;

  const calcMultiplier = () => {
    let multiplier = 1;

    for (let i = 1; i <= str.length - 1; i++) {
      multiplier *= 10;
    }
    return multiplier;
  };

  return firstDig * calcMultiplier();
};
export default calcGreaterRoundNum;
