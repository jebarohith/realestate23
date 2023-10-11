import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' ;
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
// import {
//   MatButtonModule,
//   MatIconModule,
//   MatListModule,
//   MatSidenavModule,
//   MatCardModule,
//   MatTableModule
// } from "@angular/material";
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
// import { AlertModule } from 'ngx-bootstrap';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
     MatCardModule,
     MatInputModule,
     MatButtonModule
    //  AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }