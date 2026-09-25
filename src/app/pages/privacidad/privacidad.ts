import { Component } from '@angular/core';
import { NEGOCIO } from '../../shared/business';

@Component({
  selector: 'app-privacidad',
  templateUrl: './privacidad.html',
})
export class Privacidad {
  protected readonly negocio = NEGOCIO;
  /** WhatsApp de atención: el mismo número que recibe los pedidos. */
  protected readonly whatsapp = NEGOCIO.telefonos.find((t) => t.tel === '+573213213333')!;
  protected readonly pbx = NEGOCIO.telefonos[0];
}
