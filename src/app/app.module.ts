import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FormsModule } from '@angular/forms';
import { DocumentTileComponent } from './components/document-tile/document-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentsComponent,
    CategoriesComponent,
    DocumentTileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
