import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticianCreateComponent } from './politician-create.component';

describe('PoliticianCreateComponent', () => {
  let component: PoliticianCreateComponent;
  let fixture: ComponentFixture<PoliticianCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticianCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticianCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
