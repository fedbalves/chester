import React, { FunctionComponentElement } from 'react';
import { Flex, BasicImage, Typography } from '@captalys-platform/core';

export default function AvatarComponent(): FunctionComponentElement<unknown> {
  return (
    <Flex gap="Tiny" direction="row" alignItems="center">
      <BasicImage
        style={{ borderRadius: '50%' }}
        width={40}
        height={40}
        src="https://s.gravatar.com/avatar/97baa420248d41a4fbf4b5aba2b8fd33?s=60"
      />
      <Typography variant="h5" color="secondary" colorVariant="active">
        Usuário
      </Typography>
    </Flex>
  );
}
