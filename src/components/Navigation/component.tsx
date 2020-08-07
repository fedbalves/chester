import React, { FunctionComponentElement } from 'react';
import { Flex, List } from '@captalys-platform/core';

export default function NavigationComponent(): FunctionComponentElement<unknown> {
  const content = [
    { title: 'Home' },
    { title: 'Profile' },
    { title: 'Other 1' },
    { title: 'Other 2' },
    { title: 'Other 3' },
    { title: 'Other 4' },
    { title: 'Other 5' },
    { title: 'Other 6' },
    { title: 'Other 7' },
  ];

  return (
    <Flex area="Navigation" as="nav">
      <List content={content} />
    </Flex>
  );
}
