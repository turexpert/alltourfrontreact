import { Type, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

export function ngValueAccessorProvide<T>(component: Type<T>) {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((): Type<T> => component),
    multi: true,
  };
}

export function ngValueValidatorsProvide<T>(component: Type<T>) {
  return {
    provide: NG_VALIDATORS,
    useExisting: component,
    multi: true,
  };
}
