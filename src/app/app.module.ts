import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/template/header/header.component';
import { BodyComponent } from './componentes/template/body/body.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    AppComponent,
  
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    FormsModule
  ],
  
  exports: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: []
})


export class AppModule { }

