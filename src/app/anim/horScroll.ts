import { trigger, stagger, transition, style, animate, query, state, group } from '@angular/animations';

export const horLeft = trigger('horLeft', [
    //TODO:注意:想让transform: 'translateX(0)'生效,state必须加上position: 'fixed'或者absolute
    //让页面浮动起来,因为他的子元素也绝对定位了,父元素不绝对定位会导致高度塌陷从而动画失效
    state('void', style({ position: "absolute", 'width': '100%', 'height': '100%' })),
    // * 表示任何状态
    state('*', style({ position: "absolute", 'width': '100%', 'height': '100%' })),
    // 进场动画
    transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms', style({ transform: 'translateX(0)' }))
    ]),
    // 出场动画
    transition(':leave', [
        style({ transform: 'translate(0)' }),
        animate('500ms', style({ transform: 'translateX(-100%)' }))
    ])
]);

export const horRight = trigger('horRight', [
    state('void', style({ position: "absolute", 'width': '100%', 'height': '100%' })),
    // * 表示任何状态
    state('*', style({ position: "absolute", 'width': '100%', 'height': '100%' })),
    // 进场动画
    transition(':enter', [
        style({ transform: 'translate(-100%)' }),
        animate('500ms', style({ transform: 'translateX(0)' }))
    ]),
    // 出场动画
    transition(':leave', [
        style({ transform: 'translateX(0)' }),
        animate('500ms', style({ transform: 'translateX(100%)' }))
    ])
]);