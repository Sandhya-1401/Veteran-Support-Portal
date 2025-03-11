import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  activeDropdown: string | null = null; // Track which main dropdown is open
  activeSubDropdown: string | null = null; // Track which sub-dropdown is open
  private hideTimeouts: { [key: string]: any } = {}; // Store hide timeouts for dropdowns

  constructor(private router: Router) {}

  // Show the main dropdown
  showDropdownMenu(menu: string) {
    clearTimeout(this.hideTimeouts[menu]);
    this.activeDropdown = menu;
  }

  // Hide the main dropdown after 3 seconds if the cursor leaves
  hideDropdownMenu(menu: string) {
    this.hideTimeouts[menu] = setTimeout(() => {
      if (this.activeDropdown === menu) {
        this.activeDropdown = null;
        this.activeSubDropdown = null; // Close sub-dropdown too
      }
    }, 3000);
  }

  // Show the sub-dropdown
  showSubDropdownMenu(subMenu: string) {
    clearTimeout(this.hideTimeouts[subMenu]);
    this.activeSubDropdown = subMenu;
  }

  // Hide the sub-dropdown after 3 seconds
  hideSubDropdownMenu(subMenu: string) {
    this.hideTimeouts[subMenu] = setTimeout(() => {
      if (this.activeSubDropdown === subMenu) {
        this.activeSubDropdown = null;
      }
    }, 1000);
  }

  // Keep dropdown open when inside
  keepDropdownOpen(menu: string) {
    clearTimeout(this.hideTimeouts[menu]);
  }

  // Navigate and close dropdowns
  navigate(route: string) {
    this.router.navigate([route]);
    this.activeDropdown = null;
    this.activeSubDropdown = null;
  }
}
