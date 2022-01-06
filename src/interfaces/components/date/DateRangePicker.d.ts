import {Moment} from 'moment';
import React from 'react';

declare global {
  interface DateRangePickerProps {
    dates?: [Moment | null, Moment | null];
    onChange?: (dates: [Moment | null, Moment | null]) => void;
    renderDayContents?: (day: Moment) => React.ReactNode;
    isDayBlocked?: (day: Moment) => boolean;
    dayBlockedCache?: Map<Moment, boolean>;
    singleDate?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    extra?: React.ReactNode;
    placeholder?: string;
    renderValue?: (dates: [Moment | null, Moment | null]) => React.ReactNode;
  }
}
