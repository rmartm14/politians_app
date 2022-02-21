import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Politician, PoliticianService } from 'src/services/politician.service';

@Component({
  selector: 'app-politician-info',
  templateUrl: './politician-info.component.html',
  styleUrls: ['./politician-info.component.sass']
})
export class PoliticianInfoComponent implements OnInit {
  politician!:Politician;
  id!:string;
  constructor(private router:Router, private route:ActivatedRoute, private service:PoliticianService) {
    this.route.queryParams.pipe(first()).subscribe(data => this.id = data['id']);
  }

  ngOnInit(): void {
    this.service.getPolitician(this.id).pipe(first()).subscribe(data => this.politician = data);
  }

  goBack() {
    this.router.navigate([""]);
  }
}
