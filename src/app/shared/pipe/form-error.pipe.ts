import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formError',
  standalone: true,
})
export class FormErrorPipe implements PipeTransform {

  transform(errors: ValidationErrors | null): string | null {
    if (!errors) {
      return null;
    }

    const errorMessages: { [key: string]: string } = {
      required: 'Это обязательное поле',
      email: 'Неправильный email адрес',
      mismatchedPasswords: 'Пароли не совпадают',
    };

    const firstErrorKey = Object.keys(errors)[0];

    return errorMessages[firstErrorKey];
  }
}
