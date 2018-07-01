import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "../material.module";


import { AppComponent } from './app.component';
import { CharacterListComponent } from '../characterList/character-list.component';
import {CharacterListFilterPipe} from "../characterList/character-list-filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterListFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
