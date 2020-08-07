import React, { FunctionComponentElement } from 'react';
import { Flex, Typography, Image } from '@captalys-platform/core';

export default function SidebarComponent(): FunctionComponentElement<unknown> {
  return (
    <Flex area="Sidebar" as="aside" gap="Compact">
      <Typography variant="h6" color="primary" colorVariant="active">
        Pubs
      </Typography>
      <Image width={200} height={137} src="http://lorempixel.com/200/137/" />

      <Flex gap="Tiny">
        <Typography variant="h6" color="primary" colorVariant="dark">
          This is a publicity test.
        </Typography>
        <Typography variant="meta" color="primary" colorVariant="active">
          www.teste.com.br
        </Typography>
        <Typography variant="p" color="primary" colorVariant="active">
          Use carefully. We must test with mussum ipsum text generator.
        </Typography>
      </Flex>
    </Flex>
  );
}
