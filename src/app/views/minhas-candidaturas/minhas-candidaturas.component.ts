import { Component, OnInit } from '@angular/core';
import { CandidaturaService } from 'src/app/services/candidatura.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-minhas-candidaturas',
  templateUrl: './minhas-candidaturas.component.html',
  styleUrls: ['./minhas-candidaturas.component.scss']
})
export class MinhasCandidaturasComponent implements OnInit {

  isLoading = false;
  constructor(private candidaturaService: CandidaturaService) { }

  ngOnInit(): void {
    this.recuperarMinhasVagas()
  }

  candidaturas: any = []

  recuperarMinhasVagas() {
    const username = localStorage.getItem('acessUser')
    this.isLoading = true;
    this.candidaturaService.listar(username).subscribe((res) => {
      this.candidaturas = res.slice().sort((a: any, b: any) => a.status === 'Em análise' ? -1 : b.status === 'Em análise' ? 1 : 0);
      this.isLoading = false;
    })
  }

  desistir(idCandidatura: Number): void{
    const login = localStorage.getItem('acessUser')
    this.isLoading = true;
    this.candidaturaService.desistir(login, idCandidatura).subscribe((res) => {
      this.recuperarMinhasVagas()
    })
  }

}
