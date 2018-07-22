import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexPageComponent } from "./pages/index-page/index-page.component";
import { IndexMenuComponent } from "./components/headers/index-menu/index-menu.component";
import { ChatListComponent } from "./components/chat-list/chat-list.component";
import { NoMatchComponent } from './pages/no-match/no-match.component';
const router: Routes = [
    { path: '', redirectTo: '/index/chatList', pathMatch: 'full' },
    { path: 'index', redirectTo: '/index/chatList', pathMatch: 'full' },
    {
        path: 'index',
        component: IndexPageComponent,
        children: [
            { path: 'menu', component: IndexMenuComponent },
            { path: 'chatList', component: ChatListComponent, data: { state: 'INDEX' } },
            //如果懒加载中有公用的组件,必须将组件变成模块再进行导入导出,否则父子模块引用同一组件会报重复引入的问题
            { path: 'contacts', loadChildren: './pages/contacts/contacts.module#ContactsModule', data: { state: 'CONTACTS' } },
            { path: 'discover', loadChildren: './pages/discover/discover.module#DiscoverModule', data: { state: 'DISCOVER' } },
            { path: 'me', loadChildren: './pages/me/me.module#MeModule', data: { state: 'ME' } }
        ]
    },
    { path: 'search', loadChildren: './pages/search/search.module#SearchModule', data: { state: 'SEARCH' } },
    { path: 'chatDetail/:id/:uname/:avatar', loadChildren: './pages/chat-detail/chat-detail.module#ChatDetailModule', data: { state: 'CHAT_DETAIL' } },
    { path: 'redEnvelope', loadChildren: './pages/red-envelope/red-envelope.module#RedEnvelopeModule', data: { state: 'RED_ENVELOPE' } },
    { path: 'userDetail/:id/:name/:avatar', loadChildren: './pages/user-detail/user-detail.module#UserDetailModule', data: { state: 'USER_DETAIL' } },
    { path: 'moments/:id/:name/:avatar', loadChildren: './pages/moments/moments.module#MomentsModule', data: { state: 'MOMENT' } },
    { path: '**', component: NoMatchComponent, data: { state: 'noMatch' } }
];

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
})
export class RoutingModule {
}