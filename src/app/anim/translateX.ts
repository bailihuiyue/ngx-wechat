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

export const rightInLeftLeave = trigger('rightInLeftLeave', [
    state('void', style({ position: "absolute", 'width': '100%', 'height': '100%' })),
    // * 表示任何状态
    state('*', style({ position: "absolute", 'width': '100%', 'height': '100%' })),
    // 进场动画
    transition(':enter', [
        style({ transform: 'translate(-100%)' }),
        animate('200ms', style({ transform: 'translateX(0)' }))
    ]),
    // 出场动画
    transition(':leave', [
        style({ transform: 'translateX(0)' }),
        animate('200ms', style({ transform: 'translateX(-100%)' }))
    ])
]);
export const leftInRightLeave = trigger('leftInRightLeave', [
    state('void', style({ position: "absolute", 'width': '100%', 'height': '100%' })),
    // * 表示任何状态
    state('*', style({ position: "absolute", 'width': '100%', 'height': '100%' })),
    // 进场动画
    transition(':enter', [
        style({ transform: 'translate(100%)' }),
        animate('200ms', style({ transform: 'translateX(0)' }))
    ]),
    // 出场动画
    transition(':leave', [
        style({ transform: 'translateX(0)' }),
        animate('200ms', style({ transform: 'translateX(100%)' }))
    ])
]);

export const changeCheckBoxStatus = trigger('changeCheckBoxStatus', [
    state('uncheck', style({ "backgroundColor": "#989898" })),
    state('checked', style({ "backgroundColor": "#1AAC19" })),
    transition('uncheck => checked', [
        query('.chat-btn', animate(150, style({ 'transform': 'translateX(25px)' })), { optional: true }),
    ]),
    transition('checked => uncheck', [
        query('.chat-btn', animate(150, style({ 'transform': 'translateX(0)' })), { optional: true }),
    ])
]);

// TODO:bug:解决angular 无法保持query出来的元素状态的问题:https://github.com/angular/angular/issues/18775
//Allow state queries within animations: state('x', query(...))
//目前angular动画是靠state保持的最终状态,而transition只是过渡动画,动画完后会还原到动画之前的状态
//但是query的元素无法保持状态因为state只能支持style而无法支持query 尴尬啊
export const changeCheckBoxBtnStatus = trigger('changeCheckBoxBtnStatus', [
    state('uncheck', style({ 'transform': 'translateX(0px)' })),
    state('checked', style({ 'transform': 'translateX(25px)' })),
]);
