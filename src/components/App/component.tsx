import React, { FunctionComponentElement } from 'react';
import { GlobalStyle, ThemeProvider } from '@captalys-platform/core';
import { customGlobalStyle } from './style';
import { colorTheme } from './props';
import { Layout } from '../Layout';

export default function AppComponent(): FunctionComponentElement<unknown> {
  return (
    <ThemeProvider colors={colorTheme}>
      <>
        <GlobalStyle css={customGlobalStyle} />
        <Layout />
      </>
    </ThemeProvider>
  );
}
