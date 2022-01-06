import {Moment} from 'moment';

declare global {
  interface FilterState {
    locationFilterItems: FilterItem[];
    categoryFilterItems: FilterItem[];
    languageFilterItems: FilterItem[];
    dates: [Moment | null, Moment | null];
  }
}
