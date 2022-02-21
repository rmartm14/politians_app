import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticianInfoComponent } from './politician-info.component';

describe('PoliticianInfoComponent', () => {
  let component: PoliticianInfoComponent;
  let fixture: ComponentFixture<PoliticianInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticianInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticianInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
