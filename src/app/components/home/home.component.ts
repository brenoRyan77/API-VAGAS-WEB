import { Component, OnInit } from '@angular/core';
import { IVaga } from 'src/app/interfaces/ivaga';
import { AuthService } from 'src/app/services/auth.service';
import { VagaServiceService } from 'src/app/services/vaga-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  vagas:any [] = []
  isAdmin = false;
  isLoading = false;

  constructor(private authSevice: AuthService, private vagService: VagaServiceService) { }

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

}
