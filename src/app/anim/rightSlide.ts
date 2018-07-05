import { trigger, stagger, transition, style, animate, query, state } from '@angular/animations';

export const rightSlideAnimation = trigger('rightSlideAnim', [
  state('void', style({ 
    'opacity':0,
    "transform": "scale(0)",
    "transform-origin":"top right"
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
