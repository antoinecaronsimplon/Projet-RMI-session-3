import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient} from '@angular/common/http';
import { DataStat } from '../service/stat.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
public distStat = [];

  constructor(private dataStat: DataStat) { }

  ngOnInit() {
  this.dataStat.getData()
  .subscribe(data => { console.log(this.distStat = data)});
  }

}
