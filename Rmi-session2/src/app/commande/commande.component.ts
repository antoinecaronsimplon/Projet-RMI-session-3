import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient} from '@angular/common/http';
import { ListService } from '../service/list.service';
import { ConnexionService } from '../service/connexion.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  public liste_commandes = [];
  public liste_user = [];
  constructor( private editCommande: ListService, private user:ConnexionService) {}

  ngOnInit() {
    this.editCommande.getData()
        .subscribe(data => { console.log(this.liste_commandes = data )});  
    this.user.getData()
        .subscribe(data => {console.log(this.liste_user = data)});
  }

}
