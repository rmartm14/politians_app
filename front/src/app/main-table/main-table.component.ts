import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Politician, PoliticianService } from 'src/services/politician.service';


@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.sass']
})
export class MainTableComponent implements OnInit {
  displayedColumns: string[] = ['titular', 'partido', 'sueldo', 'actions'];
  dataSource!: any;
  rowList:Array<any> = []
  page!:number;

  constructor(private service:PoliticianService, private router:Router) {
    this.page = 0;
  }

  ngOnInit(): void {
    this.service.getConfig(this.page).pipe(first()).subscribe(data => {
      console.log(data);
      this.dataSource = data;
    } );
  }

  seeElement(element:Politician){
    this.router.navigate(["/info"], { queryParams: { id: element._id.$oid } });
  }

  editElement(element:Politician){
    this.router.navigate(["/edit"], { queryParams: { id: element._id.$oid } });
  }

  pageUp() {
    this.page = this.page + 1;
    this.getPage();
  }

  pageDown() {
    if(this.page > 0){
      this.page = this.page - 1;
      this.getPage();
    }
  }

  getPage(){
    this.service.getConfig(this.page).pipe(first()).subscribe(data => {
      //TODO: Check for data
      this.dataSource = data;
    } );
  }

}
