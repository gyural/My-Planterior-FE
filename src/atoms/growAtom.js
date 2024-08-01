import { atom } from 'recoil';

export const growState = atom({
  key: 'growState',
  level: null,
  water_need: null,
  purpose: null,
  temperature: null,
  sunright: null,
  default: {
    
  },
});