// Module 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Service 
import { DataService } from './service/data.service';

// Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArrayComponent } from './array/array.component';
import { CommandeComponent } from './commande/commande.component';
import { AdminComponent } from './admin/admin.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ArchiveComponent } from './archive/archive.component';
import { StatisticsComponent } from './statistics/statistics.component';

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

library.add(faChartBar);
library.add(faCog);
library.add(faSignOutAlt);
library.add(faFolderOpen);
library.add(faHome);
library.add(faEdit);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArrayComponent,
    CommandeComponent,
    AdminComponent,
    ConnexionComponent,
    ArchiveComponent,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }