import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './admin/nav-menu/nav-menu.component';
import { HomeComponent } from './admin/home/home.component';
import { HomeUserComponent } from './user/home-user/home-user.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/angular-material.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ServiciiComponent } from './servicii/servicii.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    HomeUserComponent,
    NavComponent,
    FooterComponent,
    SidebarComponent,
    ServiciiComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    RouterModule.forRoot([
      { path: '', component: HomeUserComponent, pathMatch: 'full' },
    ])
  ],
  exports: [
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
