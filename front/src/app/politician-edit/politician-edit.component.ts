import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Politician, PoliticianService } from 'src/services/politician.service';

@Component({
  selector: 'app-politician-edit',
  templateUrl: './politician-edit.component.html',
  styleUrls: ['./politician-edit.component.sass']
})
export class PoliticianEditComponent implements OnInit {
  formGroup!:FormGroup;
  id!:string;
  currentPolitician!:Politician;
  constructor(private router:Router,private route:ActivatedRoute, private service:PoliticianService, private formBuilder:FormBuilder) { 
    this.route.queryParams.pipe(first()).subscribe(data => this.id = data['id']);
    this.service.getPolitician(this.id).pipe(first()).subscribe(data=> {
      this.formGroup = this.formBuilder.group({
        name: [data.titular, [Validators.required]],
        partido: [data.partido, [Validators.required]],
        genero: [data.genero, [Validators.required]],
        cargo: [data.cargo, [Validators.required]],
        institucion: [data.institucion, [Validators.required]],
        ccaa: [data.ccaa, [Validators.required]],
        sueldo: [data.sueldobase_sueldo, [Validators.required]],
        complementos: [data.complementos_sueldo, [Validators.required]],
        paga: [data.paga_sueldo, [Validators.required]],
        dieta: [data.dieta_sueldo, [Validators.required]],
        trienios: [data.trienios_sueldo, [Validators.required]],
        ret_men: [data.retribucion_mensual, [Validators.required]],
        ret_an: [data.retribucion_anual, [Validators.required]],
        ob: [data.observaciones, [Validators.required]],
      });
    });

  }

  ngOnInit(): void {


  }

  submit() {
    if(this.formGroup.valid){
      let pol:Politician = {
        titular: this.formGroup.value.name,
        partido: this.formGroup.value.partido,
        genero: this.formGroup.value.genero,
        cargo: this.formGroup.value.cargo,
        institucion: this.formGroup.value.institucion,
        ccaa: this.formGroup.value.ccaa,
        sueldobase_sueldo: this.formGroup.value.sueldo, 
        complementos_sueldo: this.formGroup.value.complementos,
        paga_sueldo: this.formGroup.value.paga,
        dieta_sueldo: this.formGroup.value.dieta,
        trienios_sueldo: this.formGroup.value.trienios, 
        retribucion_mensual: this.formGroup.value.ret_men,
        retribucion_anual: this.formGroup.value.ret_an,
        observaciones: this.formGroup.value.ob,
        partido_filtro:this.formGroup.value.partido,
        cargo_filtro: this.formGroup.value.cargo,
      };
    
      this.service.editPolitician(this.id, pol).pipe(first()).subscribe();
      this.goBack();
    }
  }


  goBack() {
    this.router.navigate([""]);
  }
}
