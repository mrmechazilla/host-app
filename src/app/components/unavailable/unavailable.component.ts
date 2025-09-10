import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unavailable',
  imports: [],
  templateUrl: './unavailable.component.html',
  styleUrl: './unavailable.component.scss'
})
export class UnavailableComponent {
  private router = inject(Router);

  ngOnInit() {
    this.router.navigateByUrl('/unavailable');
  }

  navigateToHomepage() {
    this.router.navigateByUrl('/');
  }

}
