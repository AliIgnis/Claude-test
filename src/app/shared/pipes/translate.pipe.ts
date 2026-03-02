import { Pipe, PipeTransform, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {
  private readonly i18n = inject(I18nService);

  transform(key: string): string {
    const translations = this.i18n.translations();
    const keys = key.split('.');
    let result: unknown = translations;
    for (const k of keys) {
      if (result == null || typeof result !== 'object') return key;
      result = (result as Record<string, unknown>)[k];
    }
    return typeof result === 'string' ? result : key;
  }
}
