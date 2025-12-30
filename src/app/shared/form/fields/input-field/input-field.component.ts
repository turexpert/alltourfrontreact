import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { BaseFieldDirective } from '../../control-value-accessor/base-field.directive';
import { HtmlInputType } from '../../entity/form.entity';
import { FormErrorPipe } from '../../../pipe/form-error.pipe';
import { ngValueAccessorProvide, ngValueValidatorsProvide } from '../../control-value-accessor/providers-control-value-accessor.utils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormErrorPipe],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
  providers: [ngValueAccessorProvide(InputFieldComponent), ngValueValidatorsProvide(InputFieldComponent)],
})
export class InputFieldComponent extends BaseFieldDirective implements OnInit {
  @Input() type: HtmlInputType = 'text';

  @Input() placeholder = '';
  @Input() a11yAriaLabel = '';
  @Input() minlength = 1;
  @Input() maxlength = 255;
  @Input() showPresetErrors = true;

  @Input()
  set formControl(control: FormControl) {
    this.valueControl = control;
    this.valueControl.setValidators(control.validator ? [control.validator] : []);
  }

  @Input()
  set touched(value: boolean) {
    if (value) {
      this.valueControl.markAllAsTouched();
    }
  }

  a11yDescribedbyId = 'desc-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
  isPasswordVisible = false;

  override ngOnInit() {
    super.ngOnInit();

    this.writeValue(this.valueControl.value);
    this.propagateChange(this.valueControl.value);
  }

  validate = (): ValidationErrors | null => {
    return this.valueControl.invalid ? this.valueControl.errors : null;
  };

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
