import { NgModule }									from '@angular/core';
import { RouterModule, Routes }			from '@angular/router';

import { FoodsComponent }					from './foods.component';

const routes: Routes = [
	{ path: '', redirectTo: '/foods', pathMatch: 'full'},
	{ path: 'foods', 		component: FoodsComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}