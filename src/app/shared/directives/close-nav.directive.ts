import { Directive, HostListener } from '@angular/core';

@Directive({ selector: '[appCloseNav]' })
export class CloseNavDirective {

  constructor() { }

  @HostListener('click')
  onClick() {
    if (document.documentElement.clientWidth > 768) { return }
    const links = document.getElementById('navbarSupportedContent');
    const navToggler = document.getElementById('navbarToggler');
    console.log(links)
    console.log(navToggler)
    if (links.classList.contains('show')) { navToggler.click(); }
  }
}