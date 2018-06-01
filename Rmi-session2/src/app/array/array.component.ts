import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient} from '@angular/common/http';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {

	titre = 'Liste de Commande';
  public liste_commandes = [];

  constructor(private dataCommande: DataService) { }
 
  ngOnInit() {
    this.dataCommande.getData()
        .subscribe(data => this.liste_commandes = data);
  }

}
