import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NEGOCIO } from '../../shared/business';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly negocio = NEGOCIO;
  protected readonly currentYear = new Date().getFullYear();
}
