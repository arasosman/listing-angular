import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {DataTablesModule} from 'angular-datatables';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {BlogComponent} from './blog/blog.component';
import {AdminComponent} from './admin/admin.component';
import {AdminHeaderComponent} from './admin/admin-header/admin-header.component';
import {AdminMenuComponent} from './admin/admin-menu/admin-menu.component';
import {AdminDashboardComponent} from './admin/admin-dashboard/admin-dashboard.component';
import {AdminNumbersComponent} from './admin/admin-numbers/admin-numbers.component';
import {AdminAddNumbersComponent} from './admin/admin-add-numbers/admin-add-numbers.component';

import { NumberComponent } from './number/number.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignInComponent,
    BlogComponent,
    AdminComponent,
    AdminHeaderComponent,
    AdminMenuComponent,
    AdminDashboardComponent,
    AdminNumbersComponent,
    AdminAddNumbersComponent,
    NumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
