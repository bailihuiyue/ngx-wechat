import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexPageComponent } from "./pages/index-page/index-page.component";
import { IndexMenuComponent } from "./components/headers/index-menu/index-menu.component";
const router: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    {
        path: 'index',
        component: IndexPageComponent,
        data: { state: 'INDEX' },
        children: [
            { path: 'menu', component: IndexMenuComponent }
        ]
    },
    //如果懒加载中有公用的组件,必须将组件变成模块再进行导入导出,否则父子模块引用同一组件会报重复引入的问题
    { path: 'address', loadChildren: './pages/address/address.module#AddressModule', data: { state: 'ADDRESS' } },
    { path: 'search', loadChildren: './pages/search/search.module#SearchModule', data: { state: 'SEARCH' } },
];


@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
})
export class RoutingModule {
}