import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minhas-candidaturas',
  templateUrl: './minhas-candidaturas.component.html',
  styleUrls: ['./minhas-candidaturas.component.scss']
})
export class MinhasCandidaturasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  candidaturas: any = [
    {
      "idCandidatura": 1,
      "status": "Em análise",
      "dataAplicacao": "09/01/2024",
      "vaga": {
        "id": 1,
        "titulo": "Desenvolvedor Frontend",
        "descricao": "Experiência com Vue",
        "modalidadeVaga": "PRESENCIAL",
        "tipoVaga": "CLT",
        "nivel": null,
        "escolaridade": null,
        "dataPublicacao": "08/01/2024",
        "dataEncerramento": null
      }
    },
    {
      "idCandidatura": 2,
      "status": "Em análise",
      "dataAplicacao": "09/01/2024",
      "vaga": {
        "id": 104,
        "titulo": "Pessoa Desenvolvedora Full Stack",
        "descricao": "Detalhes da vaga\n\nAcreditamos no poder transformador da tecnologia e na sua capacidade de contribuir para a construção de uma sociedade mais diversa e inclusiva. Como a maior empresa brasileira de tecnologia, temos o compromisso com uma política e programa de diversidade e inclusão para termos um ecossistema cada vez mais representativo, respeitoso e acolhedor.",
        "modalidadeVaga": "HOME_OFFICE",
        "tipoVaga": "PJ",
        "nivel": "Pleno",
        "escolaridade": null,
        "dataPublicacao": "09/01/2024",
        "dataEncerramento": null
      }
    }
  ]

}
