import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaProyectosComponent } from './experiencia-proyectos.component';

describe('ExperienciaProyectosComponent', () => {
  let component: ExperienciaProyectosComponent;
  let fixture: ComponentFixture<ExperienciaProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaProyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
