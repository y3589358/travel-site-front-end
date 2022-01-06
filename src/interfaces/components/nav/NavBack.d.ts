import {EventHandler} from 'react';

declare global {
  interface NavBackProps {
    label: string;
    onClick?: EventHandler;
  }
}
