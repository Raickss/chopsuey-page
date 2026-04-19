import { afterNextRender, Component, DestroyRef, HostListener, inject, signal } from '@angular/core';
import { MENU } from './menu.data';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
})
export class Menu {
  protected readonly categories = MENU;
  protected readonly isContactOpen = signal(false);
  protected readonly activeCategory = signal<string>(MENU[0].id);

  private readonly priceFormatter = new Intl.NumberFormat('es-CO', {
    maximumFractionDigits: 0,
  });

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (typeof IntersectionObserver === 'undefined') return;

      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
          if (visible) {
            const id = visible.target.id;
            if (this.activeCategory() !== id) {
              this.activeCategory.set(id);
              const chip = document.querySelector<HTMLElement>(`[data-chip="${id}"]`);
              chip?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
          }
        },
        { rootMargin: '-150px 0px -55% 0px' },
      );

      for (const category of this.categories) {
        const el = document.getElementById(category.id);
        if (el) observer.observe(el);
      }

      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  protected formatPrice(value: number): string {
    return `$ ${this.priceFormatter.format(value)}`;
  }

  protected scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  protected chipClasses(id: string): string {
    return this.activeCategory() === id
      ? 'font-semibold text-red-800'
      : 'text-gray-500 hover:text-red-800';
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
