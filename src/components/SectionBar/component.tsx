import React, { FunctionComponentElement, useState } from 'react';
import { Flex, CogIcon, FileIcon, UsersIcon, PdfIcon, Tooltip, UserIcon } from '@captalys-platform/core';
import { SectionButtonStyle } from './style';

export default function SectionBar(): FunctionComponentElement<unknown> {
  const [idx, setIdx] = useState(0);

  function handleClick(val: number): void {
    setIdx(val);
  }

  return (
    <Flex gap="Spartan" alignItems="center" direction="row" grow={2} justifyContent="center">
      <Tooltip content="Home" position="bottom-center">
        <SectionButtonStyle isActive={idx === 0} onClick={() => handleClick(0)} size="large" icon={<CogIcon />} />
      </Tooltip>

      <Tooltip content="Games" position="bottom-center">
        <SectionButtonStyle isActive={idx === 1} onClick={() => handleClick(1)} size="large" icon={<PdfIcon />} />
      </Tooltip>

      <Tooltip content="Tests" position="bottom-center">
        <SectionButtonStyle isActive={idx === 2} onClick={() => handleClick(2)} size="large" icon={<FileIcon />} />
      </Tooltip>

      <Tooltip content="Futbol" position="bottom-center">
        <SectionButtonStyle isActive={idx === 3} onClick={() => handleClick(3)} size="large" icon={<UsersIcon />} />
      </Tooltip>

      <Tooltip content="Settings" position="bottom-center">
        <SectionButtonStyle isActive={idx === 4} onClick={() => handleClick(4)} size="large" icon={<UserIcon />} />
      </Tooltip>
    </Flex>
  );
}
