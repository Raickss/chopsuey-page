import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NEGOCIO } from '../../shared/business';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
})
export class Header {
  protected readonly cartaUrl = NEGOCIO.cartaUrl;
}
