import React, { FunctionComponentElement } from 'react';
import { Flex, Typography } from '@captalys-platform/core';
import { Sidebar } from '../Sidebar';

export default function HomeComponent(): FunctionComponentElement<unknown> {
  return (
    <>
      <Flex gap="Cozy" area="Content" as="main" alignItems="center">
        <Typography variant="p">This is the main area. We should use this as staging for components;</Typography>
      </Flex>
      <Sidebar />
    </>
  );
}
