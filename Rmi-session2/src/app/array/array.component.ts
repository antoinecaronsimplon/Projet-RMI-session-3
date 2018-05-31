import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { UserService } from '../service/user.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {

	titre = 'Liste de Commande';
  data = 'bdd.json';
  constructor( ) { }
 
  ngOnInit() {
  
  }

}
