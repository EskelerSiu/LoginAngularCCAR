import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputErrorStateMatcherExample } from '../input-error-state-matcher-example/input-error-state-matcher-example';
import { FormFieldPrefixSuffixExample } from '../form-field-prefix-suffix-example/form-field-prefix-suffix-example';
import { ButtonOverviewExample } from '../button-overview-example/button-overview-example';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputErrorStateMatcherExample,
    FormFieldPrefixSuffixExample,
    ButtonOverviewExample
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern(/[A-Z]/), // Mayúscula
        Validators.pattern(/[a-z]/), // Minúscula
        Validators.pattern(/[0-9]/), // Número
        Validators.pattern(/[!@#$%^&*(),.?":{}|<>]/) // Carácter especial
      ]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      const usuario = "admin@gmail.com";
      const contraseña = "Admin12#";

      if (email === usuario && password === contraseña) {
        window.location.href = 'principal.html';
      } else {
        alert('Correo o contraseña incorrectos.');
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
