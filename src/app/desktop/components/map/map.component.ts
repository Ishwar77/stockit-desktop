import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Output() mapClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onMapClick(event) {
    this.mapClick.next(event);
  }

}
