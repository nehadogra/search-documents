import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-tile',
  templateUrl: './document-tile.component.html',
  styleUrls: ['./document-tile.component.css']
})
export class DocumentTileComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}
