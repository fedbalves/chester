import { GridBreakpoints, spacing, GridMediasTypes, SpacingAliasTypes } from '@captalys-platform/core';

export const headerHeightProp = 60;
export const headerGapProp: { [k in GridMediasTypes]?: SpacingAliasTypes } = {
  xs: 'Spartan',
  lg: 'Compact',
  xl: 'Cozy',
};

export const mediaLayoutProps: GridBreakpoints = {
  xs: {
    columns: '100%',
    areas: `
      "Header"
      "Content"
    `,
    rows: `${headerHeightProp}px minmax(calc(100vh - calc(${headerHeightProp}px + ${spacing(
      headerGapProp.xs as SpacingAliasTypes
    )})), auto)`,
    rowGap: headerGapProp.xs as SpacingAliasTypes,
  },
  lg: {
    columns: '2fr 1fr',
    areas: `
      "Header Header"
      "Content Sidebar"
    `,
    rows: `${headerHeightProp}px minmax(calc(100vh - calc(${headerHeightProp}px + ${spacing(
      headerGapProp.lg as SpacingAliasTypes
    )})), auto)`,
    rowGap: headerGapProp.lg as SpacingAliasTypes,
    columnGap: headerGapProp.lg as SpacingAliasTypes,
  },
  xl: {
    columns: '1fr 4fr 1fr',
    areas: `
      "Header Header Header"
      "Navigation Content Sidebar"
    `,
    rows: `${headerHeightProp}px minmax(calc(100vh - calc(${headerHeightProp}px + ${spacing(
      headerGapProp.xl as SpacingAliasTypes
    )})), auto)`,
    rowGap: headerGapProp.xl as SpacingAliasTypes,
    columnGap: headerGapProp.xl as SpacingAliasTypes,
  },
};
