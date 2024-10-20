import { createActionGroup, props } from '@ngrx/store';
import { AdminSession } from '../type/adminSession';

export const adminHomeActions = createActionGroup({
  source: 'home-admin',
  events: {
    loadHome: props<{ session: AdminSession }>(),
  },
});
