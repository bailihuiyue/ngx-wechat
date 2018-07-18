import { trigger, stagger, transition, style, animate, query, state, group } from '@angular/animations';

export const sildeUp = trigger('sildeUp', [
    // state('void', style({ position: "absolute", 'width': '100%', 'height': '100%' })),
    // // * 表示任何状态
    // state('*', style({ position: "absolute", 'width': '100%', 'height': '100%' })),
    // 进场动画
    transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('200ms', style({ transform: 'translateY(0)' }))
    ]),
    // 出场动画
    transition(':leave', [
        style({ transform: 'translateY(0)' }),
        animate('200ms', style({ transform: 'translateY(100%)' }))
    ])
]);

export const sildeDown = trigger('sildeDown', [
    // state('void', style({ position: "absolute", 'width': '100%', 'height': '100%' })),
    // // * 表示任何状态
    // state('*', style({ position: "absolute", 'width': '100%', 'height': '100%' })),
    // 进场动画
    transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('200ms', style({ transform: 'translateY(0)' }))
    ]),
    // 出场动画
    transition(':leave', [
        style({ transform: 'translateY(0)' }),
        animate('200ms', style({ transform: 'translateY(-100%)' }))
    ])
]);