import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaPrograComponent } from './experiencia-progra/experiencia-progra.component';
import { ExperienciaSoftwareComponent } from './experiencia-software/experiencia-software.component';
import { ExperienciaProyectosComponent } from './experiencia-proyectos/experiencia-proyectos.component';
import { LenguajesComponent } from './lenguajes/lenguajes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EducacionComponent,
    ExperienciaPrograComponent,
    ExperienciaSoftwareComponent,
    ExperienciaProyectosComponent,
    LenguajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
