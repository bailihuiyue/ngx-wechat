import { trigger, stagger, transition, style, animate, query, state, group } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  state('void', style({ opacity:1 })),
  state('*', style({ opacity:1 })),
  transition(':enter', [
    style({ opacity: 0 }),
    group([
      animate('.3s ease-in', style({ opacity: 1 })),
    ])
  ]),
  transition(':leave', [
    style({ transform: 'translateX(0)', opacity: 1 }),
    group([
      animate('.3s ease-in', style({ opacity: 0 })),
    ])
  ]),
]);

export const maskFade = trigger('maskFade', [
  state('void', style({ opacity:0.4 })),
  state('*', style({ opacity:0.4 })),
  transition(':enter', [
    style({ opacity: 0 }),
    group([
      animate('.3s ease-in', style({ opacity: 0.4 })),
    ])
  ]),
  transition(':leave', [
    style({ transform: 'translateX(0)', opacity: 0.4 }),
    group([
      animate('.3s ease-in', style({ opacity: 0 })),
    ])
  ]),
]);