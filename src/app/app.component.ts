import { Component } from '@angular/core';

import { LoginComponent } from "./componentes/login/login.component";
import {InputErrorStateMatcherExample} from './componentes/input-error-state-matcher-example/input-error-state-matcher-example';
import {FormFieldPrefixSuffixExample} from './componentes/form-field-prefix-suffix-example/form-field-prefix-suffix-example';
import {ButtonOverviewExample} from './componentes/button-overview-example/button-overview-example';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    LoginComponent,
    InputErrorStateMatcherExample, 
    FormFieldPrefixSuffixExample,
    ButtonOverviewExample],

    
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Login';
}
