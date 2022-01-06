import React from 'react';

declare global {
  interface RouteItem {
    path: string;
    element: React.ReactElement;
  }
}
