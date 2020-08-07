import styled from 'styled-components';
import { Grid, Theme } from '@captalys-platform/core';

export const LayoutStyle = styled(Grid)<{ theme: Theme }>`
  ${({ theme }) => theme.breakpoints.down('md')} {
    aside {
      display: none;
    }
  }

  ${({ theme }) => theme.breakpoints.down('lg')} {
    nav {
      display: none;
    }
  }
`;
