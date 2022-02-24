const formatScaleNum = dig => {
  const formatter = new Intl.NumberFormat('ru', {
    minimumFractionDigits: 3,
  });

  return formatter.format(dig / 1000);
};
export default formatScaleNum;
