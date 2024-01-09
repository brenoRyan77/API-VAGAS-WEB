import { Component, OnInit } from '@angular/core';
import { IVaga } from 'src/app/interfaces/ivaga';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  vagas: IVaga[] = [
    {
      titulo: 'Desenvolvedor Web',
      descricao: 'Estamos procurando um desenvolvedor web para trabalhar em projetos desafiadores.',
      modalidadeVaga: 'Remoto',
      tipoVaga: 'Tempo Integral'
    },
    {
      titulo: 'Designer UX/UI',
      descricao: 'Procuramos um designer com foco em experiência do usuário para criar interfaces intuitivas.',
      modalidadeVaga: 'Presencial',
      tipoVaga: 'Meio Período'
    },
  ];
  isAdmin = false;

  constructor(private authSevice: AuthService) { }

  ngOnInit(): void {
    this.isAdmin = this.authSevice.isAdmin();
  }

}
