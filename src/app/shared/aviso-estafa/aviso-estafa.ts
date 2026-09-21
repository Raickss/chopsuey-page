import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/**
 * Aviso de que solo se reciben pedidos por llamada. El texto lo pone quien lo
 * usa, por proyección de contenido; aquí vive solo la forma.
 *
 * - `franja`: tarjeta destacada bajo la cabecera. Es lo primero de la página.
 *   Lleva borde rojo, sombra y el icono en disco sólido. La primera frase del
 *   contenido proyectado, que va en `<strong>`, hace de titular.
 * - `nota`: la misma tarjeta un tono más baja, para usar dentro de una sección.
 */
@Component({
  selector: 'app-aviso-estafa',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="clasesCaja()" role="alert">
      <div [class]="clasesInterior()">
        <span [class]="clasesIcono()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-full w-full"
            aria-hidden="true"
          >
            <path
              d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
            />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </span>
        <p [class]="clasesTexto()">
          <ng-content />
        </p>
      </div>
    </div>
  `,
  host: { '[attr.data-variante]': 'variante()' },
})
export class AvisoEstafa {
  readonly variante = input<'franja' | 'nota'>('franja');

  protected readonly clasesCaja = computed(() =>
    this.variante() === 'franja' ? 'px-6 pt-7 max-[720px]:px-4 max-[720px]:pt-5' : '',
  );

  protected readonly clasesInterior = computed(() =>
    this.variante() === 'franja'
      ? 'mx-auto flex max-w-[53rem] items-start gap-4 rounded-card border-2 border-brand bg-white px-6 py-5 shadow-alerta max-[720px]:gap-3 max-[720px]:px-5'
      : 'flex items-start gap-3 rounded-xl border border-brand-line border-l-4 border-l-brand bg-white px-5 py-4',
  );

  protected readonly clasesIcono = computed(() =>
    this.variante() === 'franja'
      ? 'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand p-2.5 text-white'
      : 'mt-0.5 inline-flex h-5 w-5 shrink-0 text-brand',
  );

  protected readonly clasesTexto = computed(
    () =>
      'leading-relaxed text-ink-strong ' +
      (this.variante() === 'franja' ? 'text-base' : 'text-[15.5px]'),
  );
}
