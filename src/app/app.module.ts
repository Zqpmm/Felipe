import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/template/header/header.component';
import { BodyComponent } from './componentes/template/body/body.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule }  from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';



@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    AppComponent
  
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    LayoutModule
  
  ],

  exports: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: []
})


export class AppModule { 
  
}


