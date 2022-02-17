import React from 'react';
import IconStyle from './IconStyle';

export const CheckIcon = ({
  name = 'Check',
  color = 'currentColor',
  width = 24,
  height = 20,
}) => (
  <IconStyle viewBox="0 0 24 20" fill="none" width={width} height={height}>
    <title>{name}</title>
    <line
      x1="1.06066"
      y1="11.5659"
      x2="8.06066"
      y2="18.5659"
      stroke={color}
      strokeWidth="3"
    />
    <line
      x1="6.2953"
      y1="18.5659"
      x2="22.9218"
      y2="1.93934"
      stroke={color}
      strokeWidth="3"
    />
  </IconStyle>
);
