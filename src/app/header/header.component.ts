import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()
  linkSelected = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(link: string) {
    this.linkSelected.emit(link);
  }

}
