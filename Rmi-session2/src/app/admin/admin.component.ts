import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient} from '@angular/common/http';
import { ConnexionService } from '../service/connexion.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public liste_user = [];
  constructor( private user:ConnexionService) {}

  ngOnInit() {
    this.user.getData()
        .subscribe(data => {console.log(this.liste_user = data)});
  }

}
