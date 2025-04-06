/// <reference types="vite/client" />

declare module '*.svg?react' {
  import React from 'react';
  const Component: React.FC<React.SVGProps<SVGElement>>;
  export default Component;
}
