import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IVaga } from 'src/app/interfaces/ivaga';
import { VagaServiceService } from 'src/app/services/vaga-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-publicar-vagas',
  templateUrl: './publicar-vagas.component.html',
  styleUrls: ['./publicar-vagas.component.scss']
})
export class PublicarVagasComponent implements OnInit {

  form!: FormGroup
  id!: number;
  $sources!: IVaga

  modalidadeVaga = [
    {value: 'PRESENCIAL', nome: 'Presencial'},
    {value: 'HIBRIDO', nome: 'Híbrido'},
    {value: 'HOME_OFFICE', nome: 'Home-office'}
  ]

  tipoContratacao = [
    {value: 'PJ', nome: 'PJ'},
    {value: 'CLT', nome: 'CLT'},
  ]

  nivel = [
    {value: 'Estagiário', nivel: 'Estagiário'},
    {value: 'Júnior', nivel: 'Júnior'},
    {value: 'Pleno', nivel: 'Pleno'},
    {value: 'Sênior', nivel: 'Sênior'},
  ]

  escolaridade = [
    {value: 'Superior completo/Cursando', nome: 'Superior completo/Cursando'},
    {value: 'Não se aplica', nome: 'Não se aplica'},
  ]

  constructor(private vagaService: VagaServiceService, private formBuilder: FormBuilder, private router: ActivatedRoute, private rout: Router) { }

  ngOnInit(): void {
    this.createForm()
    this.id = Number(this.router.snapshot.params['id'])
    if (this.id) {
      this.buscarPorId();
    }
  }

  onSubmit(): void {
    this.id ? this.atualizarVaga() : this.salvar()
  }

  createForm(data?: IVaga): void{
    this.form = this.formBuilder.group({
      titulo: new FormControl(data? data.titulo: null, [Validators.required]),
      descricao: new FormControl(data? data.descricao: null, [Validators.required]),
      modalidadeVaga: new FormControl(data? data.modalidadeVaga: null, [Validators.required]),
      tipoVaga: new FormControl(data? data.tipoVaga: null, [Validators.required]),
      nivel: new FormControl(data? data.nivel: null, [Validators.required]),
      escolaridade: new FormControl(data? data.escolaridade: null, [Validators.required]),
    })
  }

  salvar(): void {
    this.vagaService.cadastrarVaga(this.form.getRawValue()).subscribe(
      (res) => {
        Swal.fire({
          icon: 'success',
          title: 'Sucesso!',
          text: 'Vaga publicada com sucesso!',
        }).then(() => {
          this.rout.navigate(['/home']);
        });
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Erro!',
          text: 'Ocorreu um erro ao publicar a vaga.',
        });
      }
    );
  }
  buscarPorId(): void {
    this.vagaService.buscarPorId(this.id).subscribe(
      (response) => {
        this.createForm(response);
        this.$sources = response;
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Erro!',
          text: 'Ocorreu um erro ao buscar por ID.',
        });
      }
    );
  }

  atualizarVaga(): void {
    this.vagaService.atualzarVaga(this.id, this.form.getRawValue()).subscribe(
      (res) => {
        Swal.fire({
          icon: 'success',
          title: 'Sucesso!',
          text: 'Atualização efetuada!',
        }).then(() => {
          this.form.reset();
          this.rout.navigate(['/home']);
        });
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Erro!',
          text: 'Erro ao editar vaga.',
        });
      }
    );
  }

}
