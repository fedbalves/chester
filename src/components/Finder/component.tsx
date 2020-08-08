import React, { FunctionComponentElement } from 'react';
import { Flex, Typography } from '@captalys-platform/core';
import { Logo } from '../Logo';

export default function FinderComponent(): FunctionComponentElement<unknown> {
  return (
    <Flex direction="row" alignItems="center">
      <Logo />
      <Typography variant="h2" as="h1" color="secondary" colorVariant="active">
        Layout Test
      </Typography>
    </Flex>
  );
}
