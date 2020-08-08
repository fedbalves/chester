import styled from 'styled-components';
import { IconButton } from '@captalys-platform/core';

export const SectionButtonStyle = styled(IconButton)<{ isActive: boolean }>`
  padding: ${({ theme }) => `${theme.spacing('Cozy')} ${theme.spacing('Uber')}`};
  border-radius: ${({ theme }) => theme.radius('radius-one')};
  border: none;
  color: ${({ theme }) => theme.colors.secondary.dark};
  background-color: transparent;
  box-shadow: none;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary.dark};
    background-color: ${({ theme }) => theme.colors.gray10};
  }

  ${({ isActive, theme }) =>
    isActive &&
    `
    border-bottom: 3px solid ${theme.colors.primary.base};
  `}
`;
