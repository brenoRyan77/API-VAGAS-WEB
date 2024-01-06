import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ILogin } from 'src/app/interfaces/ilogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup

  constructor(private loginService: LoginService, private formBuilder: FormBuilder, private router: ActivatedRoute, private rout: Router) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(data?: ILogin): void{
    this.form = this.formBuilder.group({
      username: new FormControl(data? data.username: null, [Validators.required]),
      password: new FormControl(data? data.password: null, [Validators.required]),
    })
  }

  onSubmit(): void {
    this.login()
  }

  login(): void{
    console.log(this.form.value)
    this.loginService.login(this.form.getRawValue()).subscribe((res) => {
      localStorage.setItem('accessToken', res.accessToken);
      localStorage.setItem('currentUser', JSON.stringify(res));
      console.log(res)
      this.rout.navigate(['/home'])
    }, (error) => {
      alert("Erro ao efetuar Login.")
      console.log(error)
    })
  }

}
