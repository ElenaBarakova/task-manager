import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'to-do';
  public activeLeft: boolean = true;
  public activeRight: boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['']);
  }

  toggleActiveLeft() {
    this.activeLeft = true;
    this.activeRight = false;
  }
  toggleActiveRight() {
    this.activeLeft = false;
    this.activeRight = true;
  }
}
