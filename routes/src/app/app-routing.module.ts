import { ERROR_COMPONENT_TYPE } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { PayementsComponent } from './payements/payements.component';
import { FormsComponent } from './products/forms/forms.component';
import { OtherComponent } from './products/other/other.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
 {path:'',redirectTo:'home',pathMatch:'full'},
 {path:'home',component:HomeComponent},
 {path:'about',component:AboutComponent},
 {path:'payements',component:PayementsComponent},
 {path:'contact',component:ContactComponent},
 {path:'products',children:[
   {path:'',component:ProductsComponent},
   {path:'forms',component:FormsComponent},
   {path:'other',component:OtherComponent}]
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
