import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient} from '@angular/common/http';
import { ListService } from '../service/list.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
