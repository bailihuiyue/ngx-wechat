import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexPageComponent } from "./pages/index-page/index-page.component";

const router: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: IndexPageComponent, data: { state: 'INDEX' } },
    //如果懒加载中有公用的组件,必须将组件变成模块再进行导入导出,否则父子模块引用同一组件会报重复引入的问题
    { path: 'address', loadChildren: './pages/address/address.module#AddressModule', data: { state: 'ADDRESS' } },
];


@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
})
export class RoutingModule {
}