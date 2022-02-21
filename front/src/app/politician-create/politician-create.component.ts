import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { Politician, PoliticianService } from 'src/services/politician.service';

@Component({
  selector: 'app-politician-create',
  templateUrl: './politician-create.component.html',
  styleUrls: ['./politician-create.component.sass']
})
export class PoliticianCreateComponent implements OnInit {

  formGroup!:FormGroup;
  constructor(private router:Router, private service:PoliticianService, private formBuilder:FormBuilder) {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      partido: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      cargo: ['', [Validators.required]],
      institucion: ['', [Validators.required]],
      ccaa: ['', [Validators.required]],
      sueldo: ['', [Validators.required]],
      complementos: ['', [Validators.required]],
      paga: ['', [Validators.required]],
      dieta: ['', [Validators.required]],
      trienios: ['', [Validators.required]],
      ret_men: ['', [Validators.required]],
      ret_an: ['', [Validators.required]],
      ob: ['', [Validators.required]],
    })
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
    
      this.service.createPolitician(pol).pipe(first()).subscribe();
      this.goBack();
    }
  }


  goBack() {
    this.router.navigate([""]);
  }
}
