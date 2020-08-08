import React, { FunctionComponentElement } from 'react';
import { Circle } from '@captalys-platform/core';

export default function LogoComponent(): FunctionComponentElement<unknown> {
  return (
    <svg style={{ width: 60, height: 60 }}>
      <Circle cx={25} cy={30} r={25} />
    </svg>
  );
}
