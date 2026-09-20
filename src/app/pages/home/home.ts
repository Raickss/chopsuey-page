import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AvisoEstafa } from '../../shared/aviso-estafa/aviso-estafa';
import { NEGOCIO, TELEFONO_PRINCIPAL } from '../../shared/business';
import { IconTelefono } from '../../shared/icons/icon-telefono';

@Component({
  selector: 'app-home',
  imports: [RouterLink, AvisoEstafa, IconTelefono],
  templateUrl: './home.html',
})
export class Home {
  protected readonly negocio = NEGOCIO;
  protected readonly telefonoPrincipal = TELEFONO_PRINCIPAL;
  protected readonly foundedIn = NEGOCIO.fundadoEn;
  protected readonly yearsOfExperience = new Date().getFullYear() - NEGOCIO.fundadoEn;
}
