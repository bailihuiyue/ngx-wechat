import { trigger, stagger, transition, style, animate, query, state } from '@angular/animations';

export const scaleTopRightAnimation = trigger('scaleTPAnim', [
  state('void', style({
    'opacity': 0,
    "transform": "scale(0)",
    "transform-origin": "top right"
  })),
  state(':enter', style({
    'opacity': 1,
    "transform": "scale(1)"
  })),
  state(':leave', style({
    'opacity': 0,
    "transform": "scale(0)"
  })),
  transition('void => *', animate('300ms')),
  transition('* => void', animate('300ms'))
]);

export const chat = trigger('chat', [
  state('void', style({ position: "absolute", 'width': '100%', 'height': '100%' })),
  // * 表示任何状态
  state('*', style({ position: "absolute", 'width': '100%', 'height': '100%' })),
  // 进场动画
  transition(':enter', [
    style({ transform: 'translateX(0)' }),
    animate('500ms', style({ transform: 'translateX(100%)' }))
  ]),
  // 出场动画
  transition(':leave', [
    style({ transform: 'translate(0)' }),
    animate('500ms', style({ transform: 'translateX(-100%)' }))
  ])
]);

export const scaleAndFade = trigger('scaleAndFade', [
  state('void', style({ position: "absolute", 'width': '100%', 'height': '100%' })),
  // * 表示任何状态
  state('*', style({ position: "absolute", 'width': '100%', 'height': '100%' })),
  // 进场动画
  transition(':enter', [
    style({ transform: 'scale(0)', opacity: 0 }),
    animate('300ms', style({ transform: 'scale(1)', opacity: 1 }))
  ]),
  // 出场动画
  transition(':leave', [
    style({ transform: 'scale(1)', opacity: 1 }),
    animate('300ms', style({ transform: 'scale(0)', opacity: 0 }))
  ])
]);

export const scaleTopLeftAnimation = trigger('scaleTLAnim', [
  state('void', style({
    'opacity': 0,
    "transform": "scale(0)",
    "transform-origin": "60px 100px"
  })),
  state(':enter', style({
    'opacity': 1,
    "transform": "scale(1)"
  })),
  state(':leave', style({
    'opacity': 0,
    "transform": "scale(0)"
  })),
  transition('void => *', animate('300ms')),
  transition('* => void', animate('300ms'))
]);