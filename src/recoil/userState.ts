import {atom} from 'recoil';

export default atom<UserState>({
  key: 'userState',
  default: {
    userId: 1,
  }
});
