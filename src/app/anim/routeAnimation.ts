import { trigger, stagger, transition, style, animate, query, state } from '@angular/animations';

export const routeAnimation = trigger('routeAnim', [
  state('void', style({ 
    'opacity':0,
    "background-color": "white"
   })),
   state(':enter', style({ 
    'opacity':1,
    "background-color": "white"
   })),
   state(':leave', style({ 
    'opacity':0,
    "background-color": "white"
   })),
  transition('void => *', animate('600ms')),
  transition('* => void', animate('600ms'))
]);
