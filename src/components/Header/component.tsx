import React, { FunctionComponentElement } from 'react';
import { Paper } from '@captalys-platform/core';

export default function HeaderComponent(): FunctionComponentElement<unknown> {
  return <Paper area="Header" as="header" shadow />;
}
