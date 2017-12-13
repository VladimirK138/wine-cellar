import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WineService } from './wine/services/wine.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { WineListComponent } from './wine/wine-list/wine-list.component';
import { EditWineComponent } from './wine/edit-wine/edit-wine.component';
import { PaginationComponent } from './wine/pagination/pagination.component';
import { SearchFormComponent } from './wine/search-form/search-form.component';
import { TableComponent } from './wine/table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    WineListComponent,
    EditWineComponent,
    PaginationComponent,
    SearchFormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule, 
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
