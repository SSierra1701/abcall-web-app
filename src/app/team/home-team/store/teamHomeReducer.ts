import { createFeature, createReducer, on } from '@ngrx/store';
import { TeamHomeState } from '../type/teamHomeState';
import { teamHomeActions } from './teamHomeActions';

const initState: TeamHomeState = {
  session: null,
};

const teamHomeFeature = createFeature({
  name: 'team-home-reducer',
  reducer: createReducer(
    initState,
    on(teamHomeActions.loadHome, (state, action) => ({
      ...state,
      session: action.session,
    }))
  ),
});

export const {
  name: teamHomeKey,
  reducer: teamHomeReducer,
  selectSession,
} = teamHomeFeature;
