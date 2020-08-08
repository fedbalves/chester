import React, { FunctionComponentElement } from 'react';
import { Flex, IconButton, CogIcon, EditIcon, FileIcon, UserIcon } from '@captalys-platform/core';
import { Avatar } from '../Avatar';

export default function ServicesComponent(): FunctionComponentElement<unknown> {
  return (
    <Flex direction="row" alignItems="center" gap="Expansive">
      <Avatar />
      <Flex gap="Spartan" direction="row">
        <IconButton color="secondary" icon={<FileIcon />} />
        <IconButton color="secondary" icon={<EditIcon />} />
        <IconButton color="secondary" icon={<UserIcon />} />
        <IconButton color="secondary" icon={<CogIcon />} />
      </Flex>
    </Flex>
  );
}
