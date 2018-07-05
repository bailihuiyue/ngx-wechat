import { trigger, stagger, transition, style, animate, query, state } from '@angular/animations';

export const leftSlideAnimation = trigger('leftSlideAnim', [
    state('void', style({ 
      'opacity':1,
      "transform": "translateX(100%)"
     })),
     state(':enter', style({ 
      'opacity':1,
      "transform": "translateX(0)"
     })),
     state(':leave', style({ 
      'opacity':1,
      "transform": "translateX(-100%)"
     })),
    transition('* => *', animate('300ms'))
    // // 定义void表示空状态下
    // state('void', style({ position: 'fixed', 'width': '100%', 'height': '100%' })),
    // // * 表示任何状态
    // state('*', style({ position: 'fixed', 'width': '100%', 'height': '100%' })),
    // // 进场动画
    // transition(':enter', [
    //     style({ transform: 'translateX(100%)' }),
    //     animate('300ms', style({ transform: 'translateX(0)' }))
    // ]),
    // // 出场动画
    // transition(':leave', [
    //     style({ transform: 'translate(0%)' }),
    //     animate('300ms', style({ transform: 'translateX(-100%)' }))
    // ])
]);

export const trigger2 = trigger('trigger2', [
    transition('* => void', [style({ opacity: 1, transform: 'translateX(0)' }), animate(1000, style({ opacity: 0 }))]),
    transition('void => *', [style({ opacity: 0, transform: 'translateX(100%)' }), animate(2000, style({ opacity: 1 }))])
]);