import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  CurrentDate = new Date();
  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }
  matrix() {
    this.route.navigate(['matrix']);
  }
  categorymatrix() {
    this.route.navigate([`categorymatrix`]);
  }
  overview() {
    this.route.navigate([`overview`]);
  }
  opportunitypage() {
    this.route.navigate([`opportunitypage`]);
  }
}
