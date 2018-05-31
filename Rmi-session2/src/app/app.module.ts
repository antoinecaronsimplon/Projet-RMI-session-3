// Module 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

// Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArrayComponent } from './array/array.component';
import { CommandeComponent } from './commande/commande.component';
import { AdminComponent } from './admin/admin.component';
import { ConnexionComponent } from './connexion/connexion.component';

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { ArchiveComponent } from './archive/archive.component';


library.add(faChartBar);
library.add(faCog);
library.add(faSignOutAlt);
library.add(faFolderOpen);
library.add(faHome);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArrayComponent,
    CommandeComponent,
    AdminComponent,
    ConnexionComponent,
    ArchiveComponent
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
