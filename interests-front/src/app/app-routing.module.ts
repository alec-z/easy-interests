import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemToInterestPageComponent} from './item-to-interest-page/item-to-interest-page.component';
import {InterestToItemPageComponent} from './interest-to-item-page/interest-to-item-page.component';
import {AuthorComponent} from './author/author.component';


const routes: Routes = [
  { path: 'item-to-interest', component: ItemToInterestPageComponent },
  { path: 'interest-to-item', component: InterestToItemPageComponent },
  { path: 'author', component: AuthorComponent },
  { path: '',   redirectTo: '/item-to-interest', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
