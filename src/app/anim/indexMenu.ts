import { trigger, stagger, transition, style, animate, query, state } from '@angular/animations';

export const indexMenuAnimation = trigger('indexMenuAnim', [
  state('void', style({ 
    'opacity':0,
    "transform": "scale(0)"
   })),
   state(':enter', style({ 
    'opacity':1,
    "transform": "scale(1)"
   })),
   state(':leave', style({ 
    'opacity':0,
    "transform": "scale(0)"
   })),
  transition('void => *', animate('300ms')),
  transition('* => void', animate('300ms'))
]);
