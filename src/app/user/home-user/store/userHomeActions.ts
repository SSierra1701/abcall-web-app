import { createActionGroup, props } from '@ngrx/store';
import { UserSession } from '../type/userSession';

export const userHomeActions = createActionGroup({
  source: 'home-user',
  events: {
    loadHome: props<{ session: UserSession }>(),
  },
});
