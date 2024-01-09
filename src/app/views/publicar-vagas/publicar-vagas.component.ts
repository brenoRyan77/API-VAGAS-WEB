import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IVaga } from 'src/app/interfaces/ivaga';
import { VagaServiceService } from 'src/app/services/vaga-service.service';

@Component({
  selector: 'app-publicar-vagas',
  templateUrl: './publicar-vagas.component.html',
  styleUrls: ['./publicar-vagas.component.scss']
})
export class PublicarVagasComponent implements OnInit {

  form!: FormGroup
  id!: number;

  modalidadeVaga = [
    {value: 'PRESENCIAL', nome: 'Presencial'},
    {value: 'HIBRIDO', nome: 'Híbrido'},
    {value: 'HOME_OFFICE', nome: 'Home-office'}
  ]

  tipoContratacao = [
    {value: 'PJ', nome: 'PJ'},
    {value: 'CLT', nome: 'CLT'},
  ]

  constructor(private vagaService: VagaServiceService, private formBuilder: FormBuilder, private router: ActivatedRoute, private rout: Router) { }

  ngOnInit(): void {
    this.createForm()
    this.id = Number(this.router.snapshot.params['id'])
  }

  onSubmit(): void {
    this.id ? console.log('tem id') : this.salvar()
  }

  createForm(data?: IVaga): void{
    this.form = this.formBuilder.group({
      titulo: new FormControl(data? data.titulo: null, [Validators.required]),
      descricao: new FormControl(data? data.descricao: null, [Validators.required]),
      modalidadeVaga: new FormControl(data? data.modalidadeVaga: null, [Validators.required]),
      tipoVaga: new FormControl(data? data.tipoVaga: null, [Validators.required]),
    })
  }

  salvar(): void{
    this.vagaService.cadastrarVaga(this.form.getRawValue()).subscribe((res) => {
      alert('Vaga publicada com sucesso!')
      this.rout.navigate(['/home'])
    }, (error) => {
      alert('Deu erro!')
    })
  }

}
