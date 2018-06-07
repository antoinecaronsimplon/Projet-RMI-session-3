import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient} from '@angular/common/http';
import { ListService } from '../service/list.service';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})

export class ArrayComponent implements OnInit {

	titre = 'Liste de Commande';
  public liste_commandes = [];
  count = 0;
  
  constructor(private dataCommande: ListService) { }
  
  ngOnInit() {
    this.dataCommande.getData()
        .subscribe(data => { console.log(this.liste_commandes = data )});  
  }
}
