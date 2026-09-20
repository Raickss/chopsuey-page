import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/**
 * Aviso de que solo se reciben pedidos por llamada. El texto lo pone cada
 * página por proyección de contenido; aquí vive solo la forma.
 */
@Component({
  selector: 'app-aviso-estafa',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="clases()" role="note">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="mt-0.5 h-4 w-4 shrink-0 text-brand"
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
  `,
})
export class AvisoEstafa {
  readonly variante = input<'banner' | 'nota'>('banner');

  protected readonly clases = computed(
    () =>
      'flex items-start gap-3 border border-brand bg-brand-soft ' +
      (this.variante() === 'banner' ? 'px-4 py-3' : 'px-4 py-3.5'),
  );

  protected readonly clasesTexto = computed(
    () =>
      'leading-relaxed text-brand-dark ' + (this.variante() === 'banner' ? 'text-base' : 'text-sm'),
  );
}
