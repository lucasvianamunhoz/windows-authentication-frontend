import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-windows-authentication';
  constructor(private authService: AuthenticationService) { }

  login() {
    this.authService.login().subscribe(
      () => {
        console.log('Autenticação do Windows bem-sucedida!');
        // Redirecione o usuário para a página desejada após o login
      },
      (error) => {
        console.error('Falha na autenticação do Windows:', error);
      }
    );
  }

}
