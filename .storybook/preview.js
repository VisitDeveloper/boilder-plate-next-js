// import React from "react";
// // import "antd/dist/antd.css";

// export const parameters = {
//   controls: { expanded: true }
// };
// export const decorators = [
//   (storyFn) => <div style={{ padding: "16px" }}>{storyFn()}</div>,
// ];

import '../public/styles/globals.css';
import * as NextImage from 'next/image';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
};