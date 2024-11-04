import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isCollapsed = true;
  activeItem = 'dashboard';

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  setActive(item: string) {
    this.activeItem = item;
  }
}
