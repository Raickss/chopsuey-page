import { Component, HostListener, signal } from '@angular/core';
import { MENU } from './menu.data';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
})
export class Menu {
  protected readonly categories = MENU;
  protected readonly isContactOpen = signal(false);

  private readonly priceFormatter = new Intl.NumberFormat('es-CO', {
    maximumFractionDigits: 0,
  });

  protected formatPrice(value: number): string {
    return `$ ${this.priceFormatter.format(value)}`;
  }

  protected scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  protected openContact(): void {
    this.isContactOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  protected closeContact(): void {
    this.isContactOpen.set(false);
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    if (this.isContactOpen()) {
      this.closeContact();
    }
  }
}
