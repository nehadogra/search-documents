import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Documents } from '../document.model';
import { DocumentsService } from '../../services/documents.service';

@Component({
    selector: 'app-documents',
    templateUrl: './documents.component.html',
    styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit, OnChanges {

    documents: Documents[] = []
    documentsData: Documents[] = [];
    searchTerm: string = null;
    @Input() filterByTerm;

    constructor(private docService: DocumentsService) { }

    ngOnInit(): void {
        this.docService.getDocuments().subscribe((response) => {
            this.documents = response;
        },
            (error) => {
                console.error("An error occured in getDocuments method: ", error);
            })
        this.documentsData = this.documents;
    }

    ngOnChanges() {
        this.searchAndFilter();
    }

    searchDoc() {
        this.searchAndFilter();
    }

    searchAndFilter() {
        let searchBy = this.searchTerm ? this.searchTerm.toLowerCase() : null;
        let filterBy = this.filterByTerm && this.filterByTerm != "All" ? this.filterByTerm.toLowerCase() : null;

        if (searchBy && filterBy) {
            this.documentsData = this.documents.filter((doc) => {
                return doc.name.toLowerCase().includes(searchBy) && doc.category.toLowerCase() == filterBy;
            })
        }
        if (searchBy && !filterBy) {
            this.documentsData = this.documents.filter((doc) => {
                return doc.name.toLowerCase().includes(searchBy);
            })
        }
        if (filterBy && !searchBy) {
            this.documentsData = this.documents.filter((doc) => {
                return doc.category.toLowerCase() == filterBy;
            })
        }
        if (!filterBy && !searchBy) {
            this.documentsData = this.documents;
        }
    }

}
