import { Component } from '@angular/core';
import { NavLink } from './models/navlink.model';

@Component({
  selector: 'bmc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  // TODO: uncomment for movie app
  // title = 'Angular-Cinema';
  // navLinks: NavLink[] = [
  //   { link: '/', name: 'Home' },
  //   { link: '/movies', name: 'Movies' },
  // ]

  title = 'Ticket Admin';

  navLinks: NavLink[] = [
    { link: '/', name: 'Dashboard' },
    { link: '/collection', name: '$ Collection' },
    { link: '/manage-showtimes', name: 'Manage Showtimes' },
  ]
}
