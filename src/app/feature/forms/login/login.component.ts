import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputFieldComponent } from '../../../shared/form/fields/input-field/input-field.component';
import { HtmlInputType } from '../../../shared/form/entity/form.entity';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, InputFieldComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  dialogRef = inject<DialogRef<string>>(DialogRef<string>);
  data = inject(DIALOG_DATA);

  passwordType: HtmlInputType = 'password';

  markAllAsTouched = false;

  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required]);

  form = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
  });

  onSubmit() {

  }

  forgotPassword() {
  }
}
