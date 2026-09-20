import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AvisoEstafa } from '../../shared/aviso-estafa/aviso-estafa';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Header, Footer, AvisoEstafa],
  templateUrl: './layout.html',
})
export class Layout {}
