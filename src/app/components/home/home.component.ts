import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IVaga } from 'src/app/interfaces/ivaga';
import { AuthService } from 'src/app/services/auth.service';
import { CandidaturaService } from 'src/app/services/candidatura.service';
import { VagaServiceService } from 'src/app/services/vaga-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  vagas:any [] = []
  isAdmin = false;
  isLoading = false;

  constructor(private authSevice: AuthService, private vagService: VagaServiceService, private candidaturaService: CandidaturaService) { }

  ngOnInit(): void {
    this.isAdmin = this.authSevice.isAdmin();
    this.listarTodos()
  }

  listarTodos(){
    this.vagService.listarTodasVagas().subscribe(response => {
      this.vagas = response
    }, (error) => {
      console.log(error)
    })
  }

  encerrarVaga(id: number): void {
    this.isLoading = true; 
    this.vagService.encerrarVaga(id).subscribe(
      () => {
        this.listarTodos();
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        console.log(error);
      }
    );
  }

  aplicarVaga(idVaga: Number): void{
    this.isLoading = true; 
    const payload: any = {
      login: localStorage.getItem('acessUser'),
      idVaga: idVaga
    }
    this.candidaturaService.aplicarVaga(payload).subscribe((res) => {
      this.isLoading = false;
      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Vaga aplicada com sucesso!',
      })
    },
    (error) => {
      this.isLoading = false;
      Swal.fire({
        icon: 'warning',
        title: 'Ops!',
        text: error.error.message,
      })});

  }

}
