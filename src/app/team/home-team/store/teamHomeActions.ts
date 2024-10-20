import { createActionGroup, props } from '@ngrx/store';
import { TeamSession } from '../type/teamSession';

export const teamHomeActions = createActionGroup({
  source: 'home-team',
  events: {
    loadHome: props<{ session: TeamSession }>(),
  },
});
