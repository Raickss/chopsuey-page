import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/**
 * Aviso de que solo se reciben pedidos por llamada. El texto lo pone quien lo
 * usa, por proyección de contenido; aquí vive solo la forma.
 *
 * - `franja`: banda a todo el ancho, bajo la cabecera. Es lo primero de la página.
 * - `nota`: recuadro dentro de una sección.
 */
@Component({
  selector: 'app-aviso-estafa',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="clasesCaja()" role="alert">
      <div [class]="clasesInterior()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="mt-0.5 h-5 w-5 shrink-0 text-brand"
          aria-hidden="true"
        >
          <path
            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
          />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
        <p [class]="clasesTexto()">
          <ng-content />
        </p>
      </div>
    </div>
  `,
})
export class AvisoEstafa {
  readonly variante = input<'franja' | 'nota'>('franja');

  protected readonly clasesCaja = computed(() =>
    this.variante() === 'franja'
      ? 'border-b-2 border-brand bg-brand-soft'
      : 'border border-brand bg-brand-soft',
  );

  protected readonly clasesInterior = computed(() =>
    this.variante() === 'franja'
      ? 'mx-auto flex max-w-4xl items-start gap-3 px-6 py-3.5'
      : 'flex items-start gap-3 px-4 py-3.5',
  );

  protected readonly clasesTexto = computed(
    () =>
      'leading-relaxed text-brand-dark ' + (this.variante() === 'franja' ? 'text-base' : 'text-sm'),
  );
}
