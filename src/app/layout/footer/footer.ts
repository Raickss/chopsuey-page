import { Component } from '@angular/core';
import { NEGOCIO } from '../../shared/business';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly negocio = NEGOCIO;
  protected readonly currentYear = new Date().getFullYear();
}
