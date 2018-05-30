// Module 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

// Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArrayComponent } from './array/array.component';

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { AdminComponent } from './admin/admin.component';

library.add(faChartBar);
library.add(faCog);
library.add(faSignOutAlt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    ArrayComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
