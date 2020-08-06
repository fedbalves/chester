import React, { FunctionComponentElement } from 'react';
import { GlobalStyle, ThemeProvider, Typography } from '@captalys-platform/core';
import { customGlobalStyle } from './style';
import { colorTheme } from './props';

export default function AppComponent(): FunctionComponentElement<unknown> {
  return (
    <ThemeProvider colors={colorTheme}>
      <>
        <GlobalStyle css={customGlobalStyle} />
        <Typography variant="h1" color="secondary">
          Mó Daoda
        </Typography>
      </>
    </ThemeProvider>
  );
}
