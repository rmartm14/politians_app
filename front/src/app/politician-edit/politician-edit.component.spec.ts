import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticianEditComponent } from './politician-edit.component';

describe('PoliticianEditComponent', () => {
  let component: PoliticianEditComponent;
  let fixture: ComponentFixture<PoliticianEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticianEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticianEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
