import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Output() filterDoc = new EventEmitter<String>();

  categories = [];
  selectedCategory: string = "All";

  constructor() { }

  ngOnInit(): void {
    this.categories = ['All', 'Financial', 'Technical', 'Marketing', 'Human Resources']
  }

  filterDocuments(category) {
    this.selectedCategory = category;
    this.filterDoc.emit(category);
  }

}
