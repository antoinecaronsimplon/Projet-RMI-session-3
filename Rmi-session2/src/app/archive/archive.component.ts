import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient} from '@angular/common/http';
import { ArchiveService } from '../service/archive.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  public list_archive = [];
  constructor( private archiveData: ArchiveService) { }

  ngOnInit() {
    this.archiveData.getData()
    .subscribe(data => { console.log(this.list_archive = data )});
  }
}
