import { Route } from '@angular/router';
import { IndicatorsComponent } from '../../indicators/components/indicators/indicators.component';
import { ControlBoardComponent } from '../../control-board/control-board/controlBoard.component';
import { HomeClientComponent } from '../components/home/homeClient.component';

export const clientHomeRouters: Route[] = [
  {
    path: '',
    title: 'home',
    component: HomeClientComponent,
    children: [
      {
        path: 'control-board',
        title: 'control board',
        component: ControlBoardComponent,
      },
      {
        path: 'indicators',
        title: 'indicators',
        component: IndicatorsComponent,
      },
    ],
  },
];
