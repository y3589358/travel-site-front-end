import {Moment} from 'moment';

declare global {
  interface DateFilterProps extends FilterProps {
    dates?: [Moment | null, Moment | null];
    onChange?: (dates: [Moment | null, Moment | null]) => void;
  }
}
