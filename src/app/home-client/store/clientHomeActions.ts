import { createActionGroup, props } from '@ngrx/store';
import { ClientSession } from '../type/clientSession';

export const clientHomeActions = createActionGroup({
  source: 'home-client',
  events: {
    loadHome: props<{ session: ClientSession }>(),
  },
});
