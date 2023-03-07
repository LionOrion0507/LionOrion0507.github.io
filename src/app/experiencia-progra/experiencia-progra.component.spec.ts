import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaPrograComponent } from './experiencia-progra.component';

describe('ExperienciaPrograComponent', () => {
  let component: ExperienciaPrograComponent;
  let fixture: ComponentFixture<ExperienciaPrograComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaPrograComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaPrograComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
