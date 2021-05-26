import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor() { }

  getDocuments() {
    return of([
      {
        id: 1,
        "name": "Terminal Instructables",
        "category": "Technical"
      },
      {
        "id": 2,
        "name": "Installation guides",
        "category": "Technical"
      },
      {
        "id": 3,
        "name": "Career opportunities",
        "category": "Human Resources"
      },
      {
        "id": 4,
        "name": "Customer onboarding",
        "category": "Financial"
      },
      {
        "id": 5,
        "name": "Outlet branding",
        "category": "Marketing"
      },
      {
        "id": 6,
        "name": "Accounting procedures",
        "category": "Financial"
      },
      {
        "id": 7,
        "name": "Training",
        "category": "Human Resources"
      },
      {
        "id": 8,
        "name": "Printing guidance",
        "category": "Marketing"
      },
      {
        "id": 9,
        "name": "Technical support",
        "category": "Technical"
      }
    ])
  }
}
