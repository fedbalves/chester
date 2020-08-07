import React, { FunctionComponentElement } from 'react';
import { LayoutStyle } from './style';
import { Routes } from '../Route';
import { Header } from '../Header';
import { mediaLayoutProps } from './props';
import { Navigation } from '../Navigation';

export default function LayoutComponent(): FunctionComponentElement<unknown> {
  return (
    <LayoutStyle medias={mediaLayoutProps}>
      <Header />
      <Routes />
      <Navigation />
    </LayoutStyle>
  );
}
