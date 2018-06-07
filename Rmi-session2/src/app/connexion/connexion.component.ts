import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient} from '@angular/common/http';
import { ConnexionService } from '../service/connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  titre = 'Connexion';
  public userData = [];
  count = 0;

  constructor(private dataUser: ConnexionService) { }

  ngOnInit() {
    this.dataUser.getData()
        .subscribe(data => { console.log(this.userData = data )});
  }

}