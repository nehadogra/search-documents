import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'search-documents';
  filterByTerm: string;

  filterDoc(term) {
    this.filterByTerm = term;
  }
}

