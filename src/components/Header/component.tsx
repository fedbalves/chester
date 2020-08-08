import React, { FunctionComponentElement } from 'react';
import { Flex, Paper } from '@captalys-platform/core';
import { Finder } from '../Finder';
import { Services } from '../Services';
import { SectionBar } from '../SectionBar';

export default function HeaderComponent(): FunctionComponentElement<unknown> {
  return (
    <Paper direction="row" area="Header" as="header" padding="0 16px" shadow>
      <Finder />
      <SectionBar />
      <Services />
    </Paper>
  );
}
